import React from "react";
import styled from "styled-components";
import Cube from "./Cube";
import { CONTAINER_HEIGHT_RATE, KEYBOARD_SIZE } from "../constants";
import Lines from "./Lines";

const Background = styled.div`
  position: absolute;
  padding: calc(50% * ${CONTAINER_HEIGHT_RATE}) 50%;
  transform-style: preserve-3d;
  /* transform: rotateZ(-10deg) rotateY(20deg); */
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  transform: rotateX(12deg);
`;

function Keyboard() {
  return (
    <Background>
      <Container>
        <Cube
          width={KEYBOARD_SIZE}
          height={KEYBOARD_SIZE}
          depth="6vmin"
          color="white"
        >
          <Lines />
        </Cube>
      </Container>
    </Background>
  );
}

export default Keyboard;
