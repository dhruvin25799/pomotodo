import React from "react";
import { useUserData } from "../../context/user-data-context";
import { Task } from "../Task/Task";
export const TaskList = (props) => {
  const { userData } = useUserData();
  const { filterState } = props;
  const filterData = (data, filterState) => {
      if(filterState==="All"){
          return data;
      }
      return data.filter(item => item.tags.includes(filterState))
  }
  const filteredData = filterData(userData.tasks, filterState)
  return (
    <>
      {filteredData.map((item) => (
        <Task key={item._id} task={item} />
      ))}
    </>
  );
};
