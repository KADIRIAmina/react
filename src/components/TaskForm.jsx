import "./TaskForm.css";
import React, { useState } from "react";

const TaskForm = ({ setTaskItems, TaskItems }) => {
  const [inputValue, setInputValue] = useState();
  const addTaskItem = () => {
    if (inputValue.trim() === "") return;
    setTaskItems([
      ...TaskItems,
      { id: TaskItems.length + 1, text: inputValue, completed: false },
    ]);
    setInputValue("");
  };

  return (
    <div
      onKeyDown={(e) => e.key === "Enter" && addTaskItem()}
      className="add-task-container"
    >
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        type="text"
        placeholder="add task"
        className="add-task-input"
      ></input>
      <button onClick={addTaskItem} className="add-task-btn">
        Add
      </button>
    </div>
  );
};
export default TaskForm;
