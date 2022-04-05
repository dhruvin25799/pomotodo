import React from "react";
import styles from "./Tag.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export const Tag = (props) => {
  return (
    <span className={styles["tag-label"]}>
      <p>{props.children}</p>
      {props.canRemove && <button onClick={props.onClick}>
        <FontAwesomeIcon icon={faXmark}/>
      </button>}
    </span>
  );
};
