import React, {Component, PropTypes} from 'react';

var initialState = {
  userAction: '',
  result: '',
  onUrl: '',
  user: '',
  valid: false
};

export default
class BugForm extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.onReportBugClick = this.onReportBugClick.bind(this);
  }

  static propTypes = {
    addBug: PropTypes.func.isRequired
  }

  onReportBugClick() {
    if(this.state.userAction && this.state.result && this.state.onUrl && this.state.user && this.state.valid) {
      var bugData = {
        userAction: this.state.userAction,
        result: this.state.result,
        onUrl: this.state.onUrl,
        user: this.state.user
      }
      this.props.addBug(bugData);
      this.setState(initialState);
    } else {
      alert('All fields are mandatory');
    }
  }

  render() {
    const state = this.state;
    return (
      <div>
        <h2>Report new bug</h2>
        
          <div className="form-group">
            <label>When I </label>
            <input className="form-control" type="text" placeholder="What actions did you do?" 
              value={this.state.userAction}
              onChange={(e) => this.setState({userAction: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label>then </label>
            <input className="form-control" type="text" placeholder="What happens?"
              value={this.state.result}
              onChange={(e) => this.setState({result: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label>on </label>
            <input className="form-control" type="text" placeholder="The url"
              value={this.state.onUrl}
              onChange={(e) => this.setState({onUrl: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label>by </label>
            <input className="form-control" type="text" placeholder="Who are you?"
              value={this.state.user}
              onChange={(e) => this.setState({user: e.target.value})}
            />
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox"
                checked={this.state.valid}
                onChange={(e) => this.setState({valid: !!e.target.value})}
              /> Yes, I could reproduce this error when trying again
            </label>
          </div>
          <button className="btn btn-success btn-lg" onClick={this.onReportBugClick} >Report bug</button>
      </div>
    );
  }
}

