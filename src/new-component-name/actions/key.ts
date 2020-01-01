import { IContext } from "../types";
import { KEY_DOWN, KEY_UP } from "../constants/actionTypes";

export default function getActions({ state, dispatch }: IContext) {
  return {
    handleKeyDown: (keyName: string) => {
      dispatch({ type: KEY_DOWN, key: keyName });
    },
    handleKeyUp: (keyName: string) => {
      dispatch({ type: KEY_UP, key: keyName });
    },
    getIsActive: (keyName: string) => {
      const { activeKeys } = state;
      const value = activeKeys[keyName];
      if (value === undefined) return false;
      return value;
    },
  };
}
