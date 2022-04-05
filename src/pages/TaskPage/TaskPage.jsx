import React from "react";
import styles from "./TaskPage.module.css";
import { useParams } from "react-router-dom";
import { useUserData } from "../../context/user-data-context";
import { Timer } from "../../components/Timer/Timer";
import { Tag } from "../../components/Tag/Tag";
export const TaskPage = (props) => {
  const { userData } = useUserData();
  const { taskId } = useParams();
  const task = userData.tasks.find((item) => item._id === taskId);
  return (
    <>
      <div className={styles["task-card"]}>
        <div className={styles["task-timer"]}>
          <Timer taskId={taskId} />
        </div>
        <div className={styles["task-detail"]}>
          <h1>{task.name}</h1>
          <p>{task.desc}</p>
          <div className={styles["task-tags"]}>
            {task.tags.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
