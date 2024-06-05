import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList({}) {
  const [todoObjects, setTodoObjects] = useState([]);
  const [taskName, setText] = useState("")
  const handleKeyDown = (e) => {
    if (e.key === 'Enter'){
      handleSubmit(taskName);
      setText("")
    }
  }

  function handleSubmit(taskName) {
    if (taskName === '')
      return
    const newTodoItem = {
      itemName: taskName,
      id: Date.now(),
      completed: false,
      category: "default"
    };
    setTodoObjects([...todoObjects, newTodoItem]);  
  }

  function toggleComplete(id){
    const updatedItems = todoObjects.map(task => 
      (task.id === id ? { ...task, completed: !task.completed } : task)); 
      setTodoObjects(updatedItems);
  }

  function deleteTask(id){
    const updatedItems = todoObjects.filter((task) => 
      task.id !== id); 
      setTodoObjects(updatedItems);
  }

  return (
    <div className="todo-list">
      <div className="input-bar">
        <input
        id="input-text"
        value={taskName}
        placeholder='Create a task'
        onChange={e => setText(e.target.value)} 
        onKeyDown={handleKeyDown}
        />
        <button id="add-button"onClick={() => {
          handleSubmit(taskName)
          setText("")
          }}>
            Add
        </button>
      </div>

      <div className="todo-items_container">
        {[...todoObjects]
        .sort((a,b) => b.id - a.id)
        .sort((a,b) => a.completed - b.completed)
        .map(task => (
        <TodoItem 
        key={task.id} 
        task={task}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        />
        ))}
      </div>
    </div>

  );

}

export default TodoList;