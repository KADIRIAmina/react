import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import React, { useState } from "react";
function App() {
  const [TaskItems, setTaskItems] = useState([]);
  const deleteItemById = (id) => {
    const newTaskItems = TaskItems.filter((item) => item.id !== id);
    setTaskItems(newTaskItems);
  };
  const taskCompletion = (taskId, isComplete) => {
    setTaskItems((prevTaskItems) => {
      return prevTaskItems.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: isComplete };
        }
        return task;
      });
    });
  };
  console.log(taskCompletion);
  console.log(TaskItems);
  return (
    <>
      <TaskForm setTaskItems={setTaskItems} TaskItems={TaskItems}></TaskForm>
      <div className="task-tracker-container">
        {TaskItems.map((task, i) => {
          return (
            <TaskItem
              taskCompletion={task}
              key={i}
              task={task}
              deleteItemById={deleteItemById}
            ></TaskItem>
          );
        })}
      </div>
    </>
  );
}

export default App;
