import { IContext } from "../types";

export default function getActions({ state, dispatch }: IContext) {
  return {
    getMonitorValue: () => state.monitorValue,
  };
}
