import React from "react";

const TaskItem = ({ task, index, onToggleComplete, onDeleteTask }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <span>{index + 1}. {task.text}</span>
      <div className="task-actions">
        <button
          onClick={() => onToggleComplete(index)}
          className="complete-task-button"
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => onDeleteTask(index)}
          className="delete-task-button"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
