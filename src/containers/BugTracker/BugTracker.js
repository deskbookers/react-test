import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

@connect(
  state => ({user: state.auth.user})
)
export default
class BugTracker extends Component {
  static propTypes = {
    user: PropTypes.object
  };

  state = {
    message: '',
    extra: '',
    by: '',
    messages: []
  };

  componentDidMount() {
    if (socket && !this.onMsgListener) {
      this.onMsgListener = socket.on('msg', this.onMessageReceived.bind(this));

      setTimeout(() => {
        socket.emit('history', {offset: 0, length: 100});
      }, 100);
    }
  }

  componentWillUnmount() {
    if (socket && this.onMsgListener) {
      socket.removeListener('on', this.onMsgListener);
      this.onMsgListener = null;
    }
  }

  onMessageReceived(data) {
    const messages = this.state.messages;
    messages.push(data);
    this.setState({messages});
  }

  handleSubmit(event) {
    event.preventDefault();

    const msg = this.state.message;
    const by = this.state.by;
    const extra = this.state.extra;
	const {user} = this.props;

    this.setState({message: '', extra: '', by: ''});

    socket.emit('msg', {
      from: user ? this.props.user.name : by,
      text: msg,
      extra: extra
    });
  }

  render() {
    const style = require('./BugTracker.scss');
    const {user} = this.props;

    return (
      <div className={style.bugtracker + ' container'}>
        <h1 className={style}>bugtracker</h1>

        <div>
          <table width="100%">
			<tr><th>#</th><th>By</th><th>Bug</th><th>Extra</th></tr>
          {this.state.messages.map((msg) => {
            return <tr><td>{`${msg.id}`}</td><td>{msg.from}</td><td>{msg.text}</td><td>{msg.extra}</td></tr>;
          })}
          </table>
          <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>

        {!user &&
			<input type="text" ref="by" placeholder="By"
             value={this.state.by}
             onChange={(event) => {
               this.setState({by: event.target.value});
             }
            }/>
		}
            <input type="text" ref="message" placeholder="Enter your bug"
             value={this.state.message}
             onChange={(event) => {
               this.setState({message: event.target.value});
             }
            }/><input type="text" ref="extra" placeholder="Enter extra things"
             value={this.state.extra}
             onChange={(event) => {
               this.setState({extra: event.target.value});
             }
            }/>
            <button className="btn" onClick={this.handleSubmit.bind(this)}>Send</button>
          </form>
        </div>
      </div>
    );
  }
}
