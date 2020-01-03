import React from "react";
import styled from "styled-components";
import Keyboard from "./react-3d-keyboard/components";

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <Background>
      <Keyboard />
    </Background>
  );
}

export default App;
