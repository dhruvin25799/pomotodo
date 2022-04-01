import React from "react";
import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStopwatch20,
  faSun,
  faCloudMoon,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/theme-context";
export const NavBar = () => {
  const { isDark, setisDark } = useTheme();
  return (
    <>
      <nav className={styles["nav"]}>
        <ul className={styles["nav-menu"]}>
          <li className={styles["nav-brand"]}>
            <Link to="/">
              <FontAwesomeIcon icon={faStopwatch20} size="2x" />
              PomoTodo
            </Link>
          </li>
          <li className={styles["nav-theme"]}>
            {isDark ? (
              <button onClick={() => setisDark(false)}>
                <FontAwesomeIcon icon={faSun} size="2x" />
              </button>
            ) : (
              <button onClick={() => setisDark(true)}>
                <FontAwesomeIcon icon={faCloudMoon} size="2x" />
              </button>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};
