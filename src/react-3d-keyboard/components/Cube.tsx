import React from "react";
import styled, { css } from "styled-components";
import { KEY_BRIGHTNESS_Z, KEY_BRIGHTNESS_X } from "../constants";

const Background = styled.div<{ width: string; height: string }>`
  position: relative;
  transform-style: preserve-3d;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const FaceStyle = css`
  position: absolute;
  background-color: white;
  backface-visibility: hidden;
  transform-style: preserve-3d;
`;

const TopFace = styled.div<{ depth: string; color: string }>`
  ${FaceStyle};
  width: 100%;
  height: 100%;
  transform: translateZ(calc(${(props) => props.depth} / 2));
  background-color: ${(props) => props.color};
  box-sizing: border-box;
  border: 1px solid gray;
  border-radius: 3px;
`;

const BottomFace = styled.div<{ depth: string; color: string }>`
  ${FaceStyle};
  width: 100%;
  height: 100%;
  transform: translateZ(calc(-${(props) => props.depth} / 2));
  transform-style: preserve-3d;
  background-color: ${(props) => props.color};
`;

const FrontFace = styled.div<{ depth: string; color: string }>`
  ${FaceStyle};
  width: 100%;
  top: 100%;
  height: ${(props) => props.depth};
  transform: translateY(-50%) rotateX(-90deg);
  background-color: ${(props) => props.color};
  filter: brightness(${KEY_BRIGHTNESS_Z});
  box-sizing: border-box;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
`;

const BackFace = styled.div<{ depth: string; color: string }>`
  ${FaceStyle};
  width: 100%;
  background-color: green;
  height: ${(props) => props.depth};
  transform: translateY(calc(-${(props) => props.depth} / 2)) rotateX(90deg);
  background-color: ${(props) => props.color};
  filter: brightness(${KEY_BRIGHTNESS_Z});
`;

const LeftFace = styled.div<{ depth: string; color: string }>`
  ${FaceStyle};
  height: 100%;
  width: ${(props) => props.depth};
  transform: translateX(calc(-${(props) => props.depth} / 2)) rotateY(-90deg);
  background-color: ${(props) => props.color};
  filter: brightness(${KEY_BRIGHTNESS_X});
`;

const RightFace = styled.div<{ depth: string; color: string }>`
  ${FaceStyle};
  height: 100%;
  left: 100%;
  width: ${(props) => props.depth};
  transform: translateX(calc(-${(props) => props.depth} / 2)) rotateY(90deg);
  background-color: ${(props) => props.color};
  filter: brightness(${KEY_BRIGHTNESS_X});
`;

interface IProps {
  children?: React.ReactNode;
  width: string;
  height: string;
  depth: string;
  color: string;
}

function Cube({ children, width, height, depth, color }: IProps) {
  return (
    <Background width={width} height={height}>
      <TopFace depth={depth} color={color}>
        {children}
      </TopFace>
      <BottomFace depth={depth} color={color} />
      <FrontFace depth={depth} color={color} />
      <BackFace depth={depth} color={color} />
      <LeftFace depth={depth} color={color} />
      <RightFace depth={depth} color={color} />
    </Background>
  );
}

export default Cube;
