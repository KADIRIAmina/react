import "./TaskItem.css";
import React, { useState } from "react";

const TaskItem = ({ task, deleteItemById, taskCompletion }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
    taskCompletion(task.id, !isChecked);
  };
  return (
    <div className="task-tracker-item-container">
      <div className="task-tracker-item"> {task.text} </div>
      <span
        onClick={handleCheckBoxChange}
        className="checkmark "
        style={{ backgroundColor: isChecked ? "#2ecc71" : "white" }}
      >
        <span className="icon">ok</span>
      </span>
      <button
        onClick={() => deleteItemById(task.id)}
        className="task-tracker-item-del"
      >
        Del
      </button>
    </div>
  );
};
export default TaskItem;
