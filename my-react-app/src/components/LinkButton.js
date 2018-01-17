import React, { Component } from 'react';
import '../App.css';
import '../styles/myTR.css';

class LinkButton extends Component {
  render() {
    return (
      <a className="LinkButton" href="#0">{this.props.text}</a>
    );
  }
}

export default LinkButton;
