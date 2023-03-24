import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {


  const [search, setSearch] = useState();
  const [newCat, setNewCat] = useState();
  
  function handleDetailsInput(e) {
    setSearch(e.target.value)
  }
  function handleSelect(e) {
    setNewCat(e.target.value) 
  }

  function handleTaskAdd(e) {
    e.preventDefault()
    const newtask = ({ text: search, category: newCat })
    onTaskFormSubmit(newtask)
  }
  return (
    <form className="new-task-form" onSubmit={handleTaskAdd}>
      <label>
        Details
        <input type="text" name="text" value={search} onChange={handleDetailsInput} />
      </label>
      <label>
        Category
        <select name="category" value={newCat} onChange={handleSelect}>
          {/* render <option> elements for each category here */}
          {
            categories.slice(1).map(categorie => <option key={categorie}>{categorie}</option>)
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
