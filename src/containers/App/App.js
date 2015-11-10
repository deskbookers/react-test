import React, { Component, PropTypes } from 'react';
import { IndexLink } from 'react-router';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
import { InfoBar, NavBarLink } from 'components';
import { pushState } from 'redux-router';
import config from '../../config';

@connect(
  state => ({user: state.auth.user}),
  {logout, pushState})
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      this.props.pushState(null, '/loginSuccess');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState(null, '/');
    }
  }

  static fetchData(getState, dispatch) {
    const promises = [];
    if (!isInfoLoaded(getState())) {
      promises.push(dispatch(loadInfo()));
    }
    if (!isAuthLoaded(getState())) {
      promises.push(dispatch(loadAuth()));
    }
    return Promise.all(promises);
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.logout();
  }

  render() {
    const {user} = this.props;
    const styles = require('./App.scss');
    return (
      <div className={styles.app}>
        <DocumentMeta {...config.app}/>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <NavBarLink to="/" className="navbar-brand" component={IndexLink}>
              <div className={styles.brand}/>
              React Redux Example
            </NavBarLink>

            <ul className="nav navbar-nav">
              {user && <li><NavBarLink to="/chat">Chat</NavBarLink></li>}

              <li><NavBarLink to="/widgets">Widgets</NavBarLink></li>
              <li><NavBarLink to="/survey">Survey</NavBarLink></li>
              <li><NavBarLink to="/about">About Us</NavBarLink></li>
              <li><NavBarLink to="/experiments">Experiments</NavBarLink></li>
              <li><NavBarLink to="/bugs">Bugs</NavBarLink></li>
              {!user && <li><NavBarLink to="/login">Login</NavBarLink></li>}
              {user && <li className="logout-link"><a href="/logout" onClick={::this.handleLogout}>Logout</a></li>}
            </ul>
            {user &&
            <p className={styles.loggedInMessage + ' navbar-text'}>Logged in as <strong>{user.name}</strong>.</p>}
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="https://github.com/erikras/react-redux-universal-hot-example"
                   target="_blank" title="View on Github"><i className="fa fa-github"/></a>
              </li>
            </ul>
          </div>
        </nav>
        <div className={styles.appContent}>
          {this.props.children}
        </div>
        <InfoBar/>

        <div className="well text-center">
          Have questions? Ask for help <a
          href="https://github.com/erikras/react-redux-universal-hot-example/issues"
          target="_blank">on Github</a> or in the <a
          href="https://discordapp.com/channels/102860784329052160/105739309289623552" target="_blank">#react-redux-universal</a> Discord channel.
        </div>
      </div>
    );
  }
}
