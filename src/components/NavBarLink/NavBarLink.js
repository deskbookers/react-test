import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class NavBarLink extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    component: PropTypes.object,
    children: PropTypes.element
  };

  render() {
    const Comp = this.props.component || Link;
    return (
        <Comp to={this.props.to} className={this.props.className} activeStyle={{
          color: '#33e0ff'
        }}>
          {this.props.children}
        </Comp>
    );
  }
}
