import { IState, IAction } from "../types";
import { KEY_DOWN, KEY_UP } from "../constants/actionTypes";
import { handleKeyDown, handleKeyUp } from "../actions/reducer";

export const initialState: IState = {
  activeKeys: {},
  monitorValue: "HELLO WORLD",
};

export function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case KEY_DOWN:
      return handleKeyDown(state, action);
    case KEY_UP:
      return handleKeyUp(state, action);
    default:
      return state;
  }
}
