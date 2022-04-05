import React, { useRef, useState } from "react";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { Task } from "../../components/Task/Task";
import { AddTaskModal } from "../../components/AddTaskModal/AddTaskModal";
import { useUserData } from "../../context/user-data-context";
import { Button } from "../../components/Button/Button";
import { FilterDropdown } from "../../components/FilterDropdown/FilterDropdown";
import { TaskList } from "../../components/TaskList/TaskList";

export const Home = () => {
  const [toggle, setToggle] = useState(false);
  const toggleModal = () => {
    setToggle(!toggle);
  };
  const [filterState, setFilterState] = useState("All");
  const { userData, userDataDispatch } = useUserData();
  const inputRef = useRef();
  const nameDispatch = () => {
    if (inputRef.current.value !== "") {
      userDataDispatch({ type: "USER_ADD", payload: inputRef.current.value });
    }
  };
  return (
    <>
      <AddTaskModal toggle={toggleModal} show={toggle} />
      <header className={styles["home-header"]}>
        {userData.user.isNew ? (
          <>
            <div className={styles["home-input"]}>
              <h1>Please enter your name : </h1>
              <div className={styles["home-input-control"]}>
                <input type="text" placeholder="Name : " ref={inputRef} />
                <Button onClick={nameDispatch}>Submit</Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1>Welcome back, {userData.user.name}!</h1>
            <h3>
              Today you have {userData.tasks.length} tasks to complete. Good
              luck!
            </h3>
          </>
        )}
      </header>
      <main>
        <div className={styles["main-card"]}>
          <div className={styles["main-card-header"]}>
            <div className={styles["header-filter"]}>
              <h1>To-Do List</h1>
              <FilterDropdown filterState={filterState} setFilterState={setFilterState}/>
            </div>
            <button
              className={styles["add-task"]}
              disabled={userData.user.isNew}
              onClick={() => toggleModal(true)}
            >
              <FontAwesomeIcon icon={faFolderPlus} size="2x" />
            </button>
          </div>
          <div className={styles["task-list"]}>
            <TaskList filterState={filterState}/>
          </div>
        </div>
      </main>
    </>
  );
};
