import React from "react";
import styles from "./TaskPage.module.css";
import { useParams } from "react-router-dom";
import { useUserData } from "../../context/user-data-context";
import { Timer } from "../../components/Timer/Timer";
export const TaskPage = (props) => {
  const { userData } = useUserData();
  const { taskId } = useParams();
  const [task] = userData.tasks.filter((item) => item._id === taskId);
  return (
    <>
      <div className={styles["task-card"]}>
        <div className={styles["task-timer"]}>
          <Timer taskId={taskId} />
        </div>
        <div className={styles["task-detail"]}>
          <h1>{task.name}</h1>
          <p>{task.desc}</p>
        </div>
      </div>
    </>
  );
};
