import React, { useState } from "react";
import TaskItem from "./TaskItem"; 
import "./css/AddTask.css"

const AddTask = () => {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addNewTask = () => {
    if (newTask.trim() !== "") {
      setToDoList([...toDoList, { text: newTask.trim(), completed: false }]);
      setNewTask("");
    }
  };

  const handleNewTask = (event) => {
    setNewTask(event.target.value);
  };

  const deleteTask = (key) => {
    const updatedList = toDoList.filter((_, index) => key !== index);
    setToDoList(updatedList);
  };

  const toggleCompleteTask = (key) => {
    const updatedList = toDoList.map((task, index) =>
      index === key ? { ...task, completed: !task.completed } : task
    );
    setToDoList(updatedList);
  };

  return (
    <div className="add-task-container">
      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={handleNewTask}
          placeholder="Enter a new task..."
          className="task-input"
        />
        <button onClick={addNewTask} className="add-task-button">
          Add Task
        </button>
      </div>
      <div className="task-list">
        <h2 className="task-list-title">The Tasks are:</h2>
        {toDoList.length === 0 ? (
          <p className="no-tasks">No tasks added yet!</p>
        ) : (
          toDoList.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              index={index}
              onToggleComplete={toggleCompleteTask}
              onDeleteTask={deleteTask}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AddTask;
