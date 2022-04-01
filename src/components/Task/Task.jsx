import React from "react";
import styles from "./Task.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib, faSkull } from "@fortawesome/free-solid-svg-icons";
import { useUserData } from "../../context/user-data-context";
import { Link } from "react-router-dom";
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
            <Link to={`/tasks/${props.task._id}`}>
              <FontAwesomeIcon icon={faPenNib} size="2x" />
            </Link>
            <button onClick={() => userDataDispatch({type: "TASK_REMOVE", payload: props.task})}>
              <FontAwesomeIcon icon={faSkull} size="2x" />
            </button>
          </div>
        </div>
      </>
    );
}