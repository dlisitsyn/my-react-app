import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInfoIconWrapper = styled.div`
  display: inline-block;
  position: relative;

  &:hover .tooltip {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);
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
  bottom: 100%;
  left: -20px;
  margin-bottom: 15px;
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
    border-left: solid transparent 10px;
    border-right: solid transparent 10px;
    border-top: solid #FFF 10px;
    bottom: -10px;
    content: " ";
    height: 0;
    left: 50%;
    margin-left: -13px;
    width: 0;
    //box-shadow: 5px 5px 4px 0 rgba(0,0,0,0.2);
  }
`;

class Tooltip extends Component {
  render() {
    //const iconURL = props.iconURL;
    return (
      <StyledInfoIconWrapper>
        <StyledInfoIcon src={require("../img/help-icon.png")} alt="help"></StyledInfoIcon>
        <StyledTooltipText className="tooltip">{this.props.text}</StyledTooltipText>
      </StyledInfoIconWrapper>
    );
  }
}

export default Tooltip;
