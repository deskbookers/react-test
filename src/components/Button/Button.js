import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Button extends Component {
  static propTypes = {
    component: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.element,
    buttonSize: PropTypes.string,
    buttonStyle: PropTypes.string
  };

  render() {
    const Comp = this.props.component || Link;
    const { className, ...rest } = this.props;
    const buttonStyle = this.props.buttonStyle || 'default';
    const buttonSize = this.props.buttonSize || '';

    return (
        <Comp className={'btn btn-' + buttonStyle + ' ' + (buttonSize.length > 0 ? 'btn-' + buttonSize : '') + ' ' + (className || '')} {...rest}>
          {this.props.children}
        </Comp>
    );
  }
}
