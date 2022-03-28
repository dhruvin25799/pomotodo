import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import styles from "./AddTaskModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../Button/Button";
import { useUserData } from "../../context/user-data-context";
import { useTheme } from "../../context/theme-context";
import { modalInputReducer, initialModalInput } from "../../reducers/modaInputReducer";



const isInputValid = (input) => {
  if (input.name !== "" && input.desc !== "" && input.time >= 10) {
    return true;
  }
  return false;
};
export const AddTaskModal = (props) => {
  const {isDark} = useTheme();
  const {userDataDispatch} = useUserData();
  const [modalInput, modalInputDispatch] = useReducer(
    modalInputReducer,
    initialModalInput
  );
  const onSubmit = () => {
    if (isInputValid(modalInput)) {
      userDataDispatch({ type: "TASK_ADD", payload: { ...modalInput, _id: uuidv4() } });
    }
    props.toggle();
    modalInputDispatch({ type: "RESET" });
  };
  return ReactDOM.createPortal(
    <>
      <div
        className={`${styles["modal"]} ${props.show && styles["visible"]}`}
        data-theme={isDark && "dark"}
      >
        <div className={styles["modal-body"]}>
          <div className={styles["modal-header"]}>
            <h3>Add Task</h3>
            <button onClick={() => props.toggle()}>
              <FontAwesomeIcon icon={faXmark} size="2x" />
            </button>
          </div>
          <div className={styles["modal-input"]}>
            <div className={styles["input-control"]}>
              <input
                type="text"
                value={modalInput.name}
                onChange={(e) =>
                  modalInputDispatch({ type: "NAME", payload: e.target.value })
                }
                placeholder="Add Title"
              />
            </div>
            <div className={styles["input-control"]}>
              <input
                type="text"
                value={modalInput.desc}
                onChange={(e) =>
                  modalInputDispatch({ type: "DESC", payload: e.target.value })
                }
                placeholder="Add Description"
                className={styles["input-small"]}
              />
            </div>
            <div className={styles["input-control"]}>
              <label>Estimated Time : </label>
              <div className={styles["input-slider"]}>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="10"
                  value={modalInput.time}
                  onChange={(e) =>
                    modalInputDispatch({
                      type: "TIME",
                      payload: e.target.value,
                    })
                  }
                />
                <input type="number" value={modalInput.time} />
              </div>
            </div>
          </div>
          <div className={styles["modal-cta"]}>
            <Button onClick={onSubmit}>Add</Button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
};
