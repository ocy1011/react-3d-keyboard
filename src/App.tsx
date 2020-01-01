import React from "react";
import styled from "styled-components";
import NewComponent from "./new-component-name/components";

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <Background>
      <NewComponent />
    </Background>
  );
}

export default App;
