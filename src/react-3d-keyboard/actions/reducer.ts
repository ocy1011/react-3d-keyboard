import { IState, IAction } from "../types";
import { keys } from "../constants/keys";
import { MONITOR_VALUE_MAX_LENGTH } from "../constants";

function updateActiveKey(state: IState, action: IAction, isActive: boolean) {
  const { activeKeys } = state;
  activeKeys[action.key!] = isActive;
  return activeKeys;
}

function updateMonitorValue(state: IState, action: IAction) {
  const { monitorValue } = state;
  const key = action.key!;
  if (key === "Backspace")
    return monitorValue.substring(0, monitorValue.length - 1);

  const value = keys[key].value;
  const nextMonitorValue = monitorValue + keys[key].value;
  if (nextMonitorValue.length > MONITOR_VALUE_MAX_LENGTH) return value;
  return nextMonitorValue;
}

export function handleKeyDown(state: IState, action: IAction) {
  return {
    ...state,
    activeKeys: updateActiveKey(state, action, true),
    monitorValue: updateMonitorValue(state, action),
  };
}

export function handleKeyUp(state: IState, action: IAction) {
  return { ...state, activeKeys: updateActiveKey(state, action, false) };
}
