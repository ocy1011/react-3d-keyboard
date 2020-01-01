import { IContext } from "../types";
import { KEY_DOWN, KEY_UP } from "../constants/actionTypes";
import { keys } from "../constants/keys";

export default function getActions({ state, dispatch }: IContext) {
  return {
    handleKeyDown: (event: KeyboardEvent) => {
      const { key } = event;
      if (keys[key] === undefined) return;
      if (keys[key].isEnable === false) return;
      dispatch({ type: KEY_DOWN, key });
    },
    handleKeyUp: (event: KeyboardEvent) => {
      const { key } = event;
      dispatch({ type: KEY_UP, key });
    },
  };
}
