import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { LINE_HEIGHT_PERCENT, KEY_HEIGHT } from "../constants";
import { lines } from "../constants/keys";
import Key from "./Key";
import getActions from "../actions/lines";
import { Context } from "../store";

const Background = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  transform-style: preserve-3d;
  transform: translateZ(calc(${KEY_HEIGHT} / 2));
`;

const Line = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: ${LINE_HEIGHT_PERCENT}%;
  justify-content: space-between;
  transform-style: preserve-3d;
`;

function Lines() {
  const { handleKeyDown, handleKeyUp } = getActions(useContext(Context));

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return (
    <Background>
      {lines.map((line, lineIndex) => (
        <Line key={lineIndex}>
          {line.map((keyName, keyIndex) => (
            <Key keyName={keyName} key={keyIndex} />
          ))}
        </Line>
      ))}
    </Background>
  );
}

export default Lines;
