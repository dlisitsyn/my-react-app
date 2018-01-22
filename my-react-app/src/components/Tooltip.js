import React, { Component } from 'react';
import styled from 'styled-components';

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
  box-sizing: border-box;
  bottom: 100%;
  transform: translateX(-50%); // align with icon
  left: 50%;

  margin-bottom: 10px;
  padding: 10px;
  border: solid 1px #DDD;
  border-radius: 4px;

  background: #FFF;
  color: #4D4D4D;
  opacity: 0;
  box-shadow: 5px 5px 4px 0 rgba(0,0,0,0.2);

  pointer-events: none;

  &:before {
    display: block;
    position: absolute;
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
    box-shadow: 5px 5px 4px 0 rgba(0,0,0,0.2);

    transform: rotate(45deg);
  }

  &.moveRight:after {
    left: 10%;
  }
`;

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closeToEdgeX: false,
      closeToEdgeY: false
    };

    this.getTooltipWidth = this.getTooltipWidth.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.adjustTooltipPosition = this.adjustTooltipPosition.bind(this);
  }

  maxTooltipWidth = 360;

  getTooltipWidth = () => {
    const charsPerLine = 50;
    const charWIdth = 5;
    const textLength = this.props.text.length;
    const numOfLInes = Math.ceil(parseFloat(textLength / charsPerLine));

    return numOfLInes === 1 ? textLength * charWIdth : this.maxTooltipWidth;
  };

  adjustTooltipPosition = () => {
    this.setState({
      closeToEdgeX: true
    });
  };

  handleHover = (e) => {
    if (e.clientY < 100) {
      e.target.classNames += " hasTooltipBelow";
    }

    if (e.clientX <= this.maxTooltipWidth / 2) {
      this.adjustTooltipPosition();
    }
  }

  render() {
    let textColour = this.state.closeToEdgeX ? 'red' : 'black';
    let moveXClass = this.state.closeToEdgeX ? 'moveRight' : 'moveLeft';
    let moveX = this.state.closeToEdgeX ? 'translateX(-10%)' : 'translateX(-50%)';


    return (
      <StyledInfoIconWrapper onMouseEnter={this.handleHover}>
        <StyledInfoIcon src={this.props.image} alt="help"></StyledInfoIcon>
        <StyledTooltipText style={{width: this.getTooltipWidth()+'px', color: textColour, transform: moveX}} className={"tooltip " + moveXClass}>{this.props.text}</StyledTooltipText>
      </StyledInfoIconWrapper>
    );
  }
}

export default Tooltip;
