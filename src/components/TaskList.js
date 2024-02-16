import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const handleDelete = (task) => {
    const newTasks = tasks.filter((t) => t !== task);
    setTasks(newTasks);
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task key={task.text} task={task} onDelete={() => handleDelete(task)} />
      ))}
    </div>
  );
}

export default TaskList;