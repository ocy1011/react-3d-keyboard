import { Dispatch } from "react";

export interface IState {
  activeKeys: {
    [index: string]: boolean | undefined;
  };
  monitorValue: string;
}

export interface IAction {
  type: string;
  key?: string;
}

export interface IContext {
  state: IState;
  dispatch: Dispatch<IAction>;
}
