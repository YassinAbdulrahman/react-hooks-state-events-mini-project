import React from "react";
import Task from "./Task"

function TaskList({ tasks , handleDelete }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}

      {tasks.map((task,index) => {
        return <Task key={index} text={task.text} category={task.category} handleDelete={handleDelete}/>
      })}
    </div>
  );
}

export default TaskList;
