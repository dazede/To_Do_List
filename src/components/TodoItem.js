function TodoItem({task, toggleComplete, deleteTask}){ 
  
  const style = {
    backgroundColor: task.completed === true ? '#ffffff48' : '#ffffffe7',
  };

  function handleComplete(){
    toggleComplete(task.id);
  }

  function handleDelete(){
    deleteTask(task.id)
  }

  return (
    <div class="todo_item_wrapper" style={style}>
        <input 
        type="checkbox" 
        checked={task.completed}
        onChange={handleComplete}
        />
        <label className="todo-label" htmlFor="todo-0">
        {task.itemName}
        </label>
        <button 
        onClick={handleDelete}> 
          X
        </button>
    </div>
  );
  
}

export default TodoItem;