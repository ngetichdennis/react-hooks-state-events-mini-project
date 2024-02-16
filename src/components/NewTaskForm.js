 import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({ text: taskText, category: selectedCategory });
    setTaskText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) =>
          category !== "All" ? (
            <option key={category} value={category}>
              {category}
            </option>
          ) : null
        )}
      </select>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;