import React from "react";
import Provider from "../store";
import Container from "./Container";

export default () => {
  return (
    <Provider>
      <Container />
    </Provider>
  );
};
