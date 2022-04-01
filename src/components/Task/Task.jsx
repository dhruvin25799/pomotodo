import React from "react";
import styles from "./Task.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib, faSkull } from "@fortawesome/free-solid-svg-icons";
import { useUserData } from "../../context/user-data-context";
export const Task = (props) => {
  const { userDataDispatch } = useUserData();
    return (
      <>
        <div className={styles["task"]}>
          <div className={styles["task-header"]}>
            <label>
              <input type="checkbox" />
              {props.task.name}
            </label>
          </div>
          <div className={styles["task-cta"]}>
            <button>
              <FontAwesomeIcon icon={faPenNib} size="2x" />
            </button>
            <button onClick={() => userDataDispatch({type: "TASK_REMOVE", payload: props.task})}>
              <FontAwesomeIcon icon={faSkull} size="2x" />
            </button>
          </div>
        </div>
      </>
    );
}