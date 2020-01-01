import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { Context } from "../store";
import getActions from "../actions/monitor";

const Background = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  border-radius: 10px;
  background: radial-gradient(#eafcfe, #a9f7ff);
`;

const CaretAnimation = keyframes`
  from {
    opacity: 1;
  }
  49%{
    opacity: 1;
  }
  51%{
    opacity: 0;
  }
  to{
    opacity: 0;
  }
`;

const Text = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 6.5vmin;
  font-size: 6.5vmin;
  font-weight: bold;
  white-space: pre;

  &::after {
    position: relative;
    content: "";
    width: 1vmin;
    height: 100%;
    background-color: black;
    animation-name: ${CaretAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;

function Monitor() {
  const { getMonitorValue } = getActions(useContext(Context));
  return (
    <Background>
      <Text>{getMonitorValue()}</Text>
    </Background>
  );
}

export default Monitor;
