import React from "react";
import Task from "./Task"

function TaskList(tasks) {
  
  return (
    <div>
      {/* display a list of tasks using Task component */}
      const taskList = tasks.map((task) => (
    // use the task id as the key prop
    <Task key={task.id} task={task}/>
      ))
     
    </div>
  );
}

export default TaskList;
