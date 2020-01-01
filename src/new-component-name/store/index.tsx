import React, { createContext, useReducer } from "react";
import { IContext } from "../types";
import { initialState, reducer } from "../reducer";

export const Context = createContext<IContext>({
  state: initialState,
  dispatch: () => {},
});

interface IProps {
  children: React.ReactNode;
}

function Provider({ children }: IProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    state,
    dispatch,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;
