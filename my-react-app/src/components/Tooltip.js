import React, { Component } from 'react';
import styled from 'styled-components';

const shadowColor = 'rgba(0,0,0,0.2)';

const StyledInfoIconWrapper = styled.div`
  display: inline-block;
  position: relative;

  &:hover .tooltip {
    opacity: 1;
  }
`;

const StyledInfoIcon = styled.img`
  position: relative;
  cursor: help;
  -webkit-transform: translateZ(0); // webkit flicker fix
  -webkit-font-smoothing: antialiased; // webkit text rendering fix
`;

const StyledTooltipText = styled.div`
  display: block;
  position: absolute;
  z-index: 10;
  box-sizing: border-box;
  bottom: 100%;
  transform: translateX(-50%); // align with icon
  left: 50%;

  margin-bottom: 10px;

  &.moveDown {
    top: 120%;
    bottom: auto;
  }

  padding: 10px;
  border: solid 1px #DDD;
  border-radius: 4px;

  background: #FFF;
  color: #4D4D4D;
  opacity: 0;
  box-shadow: 5px 5px 4px 0 ${shadowColor};

  pointer-events: none;

  &:before {
    display: block;
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 20px;
    bottom: -20px;
    left: 0;
    content: " ";
  }

  &:after {
    display: block;
    position: absolute;

    bottom: -6px;
    left: 50%;

    width: 0;
    height: 0;
    margin-left: -6px;

    border-left: solid 12px #FFF;
    border-bottom: solid 12px #FFF;
    content: " ";
    box-shadow: 5px 5px 4px 0 ${shadowColor};

    transform: rotate(45deg);
  }

  &.moveRight:after {
    left: 10%;
  }

  &.moveLeft:after {
    left: 90%;
  }

  &.moveDown:after {
    top: -10%;
    box-shadow: none;
    border-top: solid 1px ${shadowColor};
    border-right: solid 1px ${shadowColor};
    transform: rotate(-45deg);
  }
`;

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closeToLeftEdge: false,
      closeToRightEdge: false,
      closeToTop: false
    };

    this.getTooltipWidth = this.getTooltipWidth.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  maxTooltipWidth = 360;

  getTooltipWidth = () => {
    const charsPerLine = 50;
    const charWIdth = 5;
    const textLength = this.props.text.length;
    const numOfLInes = Math.ceil(parseFloat(textLength / charsPerLine));

    return numOfLInes === 1 ? textLength * charWIdth : this.maxTooltipWidth;
  };

  handleHover = (e) => {
    this.setState({
      closeToTop: e.clientY < 100 ? true : false
    });

    this.setState({
      closeToLeftEdge: e.clientX <= this.maxTooltipWidth / 2 ? true : false
    });

    this.setState({
      closeToRightEdge: (document.body.clientWidth - e.clientX) <= this.maxTooltipWidth / 2 ? true : false
    });
  }

  render() {
    let moveXClass = '';
    let moveYClass = '';
    let transformStyle = '';

    if (this.state.closeToLeftEdge) {
      moveXClass = 'moveRight';
      transformStyle = 'translateX(-10%)';
    } else if (this.state.closeToRightEdge) {
      moveXClass = 'moveLeft';
      transformStyle = 'translateX(-90%)';
    } else {
      transformStyle = 'translateX(-50%)'; // default position - horizontally aligned with the trigger
    }

    if (this.state.closeToTop) {
      moveYClass ='moveDown';
      transformStyle += '';
    } else {

    }

    return (
      <StyledInfoIconWrapper onMouseEnter={this.handleHover}>
        <StyledInfoIcon src={this.props.image} alt="help"></StyledInfoIcon>
        <StyledTooltipText style={{width: this.getTooltipWidth()+'px', transform: transformStyle}} className={"tooltip " + moveXClass + " " + moveYClass}>{this.props.text}</StyledTooltipText>
      </StyledInfoIconWrapper>
    );
  }
}

export default Tooltip;
