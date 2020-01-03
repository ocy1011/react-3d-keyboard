import React, { useContext } from "react";
import styled from "styled-components";
import Cube from "./Cube";
import {
  KEY_WIDTH_PERCENT,
  KEY_HEIGHT,
  KEY_DOWN_SPEED,
  KEY_ACTIVE_COLOR,
} from "../constants";
import { keys } from "../constants/keys";
import getActions from "../actions/key";
import { Context } from "../store";

const Background = styled.div<{
  width: string;
}>`
  position: relative;
  transform-style: preserve-3d;
  width: ${(props) => props.width};
  height: 100%;
  transform: translateZ(0px);
`;

const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 0.3vmin 0.25vmin black;
  transform: translateZ(calc(-${KEY_HEIGHT} / 2));
`;

const KeyWrapper = styled.div<{ isActive: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform-origin: 50% 50% calc(-${KEY_HEIGHT} / 2);
  transform: scaleZ(${(props) => (props.isActive ? 0.2 : 1)});
  transition: transform ${KEY_DOWN_SPEED};
`;

const KeyValue = styled.div<{ isActive: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1vmin;
  width: 100%;
  height: 100%;
  user-select: none;
  z-index: 99;
  background-color: ${(props) => (props.isActive ? KEY_ACTIVE_COLOR : "white")};
  transition: background-color ${KEY_DOWN_SPEED};
`;

interface IProps {
  keyName: string;
}

function Key({ keyName }: IProps) {
  const { getIsActive } = getActions(useContext(Context));
  const isActive = getIsActive(keyName);
  const { value, widthRate, isEnable } = keys[keyName];
  const width = `${KEY_WIDTH_PERCENT * widthRate}%`;
  return (
    <Background width={width}>
      <Shadow />
      <KeyWrapper isActive={isActive}>
        <Cube
          width="100%"
          height="100%"
          depth={KEY_HEIGHT}
          color={isEnable ? "white" : "#ff3434"}
        >
          {isEnable && <KeyValue isActive={isActive}>{value}</KeyValue>}
        </Cube>
      </KeyWrapper>
    </Background>
  );
}

export default Key;
