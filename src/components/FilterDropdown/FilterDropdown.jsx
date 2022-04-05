import React from "react";
import { useUserData } from "../../context/user-data-context";
import styles from "./FilterDropdown.module.css";


export const FilterDropdown = (props) => {
    const {userData} = useUserData();
    const {filterState, setFilterState} = props;
    return (
      <>
        <div className={styles["filter-dropdown"]}>
          <label>Filter by Tag : </label>
          <select name="tags" value={filterState} onChange={(e) => setFilterState(e.target.value)}>
            <option value="All">
              All
            </option>
            {userData.allTags.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </>
    );
}