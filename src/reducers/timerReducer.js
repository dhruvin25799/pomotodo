import { setCircleDasharray } from "../helpers/setCircleDashArray";
export const timerReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE": {
      action.payload.dispatch({
        type: "TASK_TIME",
        payload: {
          task: action.payload.payload,
          timeElapsed: action.payload.payload.time * 60 - state.time,
        },
      });
      return { ...state, isActive: !state.isActive };
    }
    case "RESET": {
      action.payload.dispatch({type: "TASK_TIME", payload: {
        task: action.payload.payload,
        timeElapsed: 0,
      }})
      return {
        ...state,
        isActive: false,
        time: action.payload.payload.time * 60,
        dashValue: "283",
      };
    }
    case "TICK": {
      return {
        ...state,
        time: state.time - 1,
        dashValue: setCircleDasharray(state.time - 1, action.payload),
      };
    }
    default:
      return state;
  }
};
