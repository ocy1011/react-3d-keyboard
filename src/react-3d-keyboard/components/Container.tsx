import React from "react";
import styled from "styled-components";
import Monitor from "./Monitor";
import Keyboard from "./Keyboard";

const Background = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(black, gray);
`;

const HalfContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vmin;
  height: 50%;
  transform-style: preserve-3d;
  perspective: 100vmin;
`;

function Container() {
  return (
    <Background>
      <HalfContainer>
        <Monitor />
      </HalfContainer>
      <HalfContainer>
        <Keyboard />
      </HalfContainer>
    </Background>
  );
}

export default Container;
