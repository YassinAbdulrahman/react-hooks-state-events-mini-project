import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [selectedCategoryButton, setSelectedCategoryButton] = useState('All')

  function handleDelete(item) {
    const newtask = tasks.filter(task => task.text !== item)
    setTasks(newtask)
  }

  function onSubmitForm(task) {
    setTasks([...tasks, task])
  }

  const itemDisplay = tasks.filter(item => {
    if (selectedCategoryButton === 'All') return true

    return selectedCategoryButton === item.category
  })
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} btnclick={selectedCategoryButton} selectedButton={setSelectedCategoryButton} />
      <NewTaskForm categories={categories} onTaskFormSubmit={onSubmitForm} />
      <TaskList tasks={itemDisplay} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
