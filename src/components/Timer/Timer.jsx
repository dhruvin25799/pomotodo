import React, { useEffect, useReducer } from "react";
import { Button } from "../Button/Button";
import styles from "./Timer.module.css";
import { useUserData } from "../../context/user-data-context";
import { formatTime } from "../../helpers/formatTime";
import { setCircleDasharray } from "../../helpers/setCircleDashArray";
import { timerReducer } from "../../reducers/timerReducer";

export const Timer = (props) => {
  const { userData, userDataDispatch } = useUserData();
  const [task] = userData.tasks.filter((item) => item._id === props.taskId);
  const initialTimerState = {
    isActive: false,
    time: task.time * 60 - task.timeElapsed,
    dashValue: setCircleDasharray(task.time*60 - task.timeElapsed, task.time*60),
  };
  const [timerState, timerStateDispatch] = useReducer(
    timerReducer,
    initialTimerState
  );
  useEffect(() => {
    let interval = null;
    if (timerState.isActive) {
      interval = setInterval(() => {
        timerStateDispatch({ type: "TICK", payload: task.time * 60 });
      }, 1000);
    }
    if (!timerState.isActive && timerState.time !== 0) {
      clearInterval(interval);
    }
    if (timerState.time === 0) {
      timerStateDispatch({ type: "RESET", payload: task.time * 60 });
    }
    return () => clearInterval(interval);
  }, [timerState, task.time]);
  return (
    <>
      <div className={styles["timer-container"]}>
        <div className={styles["base-timer"]}>
          <svg
            className={styles["base-timer__svg"]}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className={styles["base-timer__circle"]}>
              <circle
                className={styles["base-timer__path-elapsed"]}
                cx="50"
                cy="50"
                r="45"
              />
              <path
                id="base-timer-path-remaining"
                stroke-dasharray={timerState.dashValue}
                className={styles["base-timer__path-remaining"]}
                d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
              ></path>
            </g>
          </svg>
          <span
            span
            id="base-timer-label"
            className={styles["base-timer__label"]}
          >
            {formatTime(timerState.time)} <br></br> out of {task.time} min
          </span>
        </div>
        <div className={styles["timer-controls"]}>
          <Button onClick={() => timerStateDispatch({ type: "TOGGLE", payload : {dispatch: userDataDispatch, payload: task} })}>
            {timerState.isActive ? "Pause" : "Start"}
          </Button>
          <Button
            onClick={() =>
              timerStateDispatch({ type: "RESET", payload: { dispatch: userDataDispatch, payload: task} })
            }
          >
            Reset
          </Button>
        </div>
      </div>
    </>
  );
};
