import React from 'react';

function TodoItem({task, removeTodo, toggleComplete}) {
  return (
    <div className="singleTodoItem">
    <p className={`${task.completed ? "completed":""}`}>{task.task}</p>
      <div className= "buttonTask">
        <button className="markCompleteTodoItem" onClick={()=>toggleComplete(task.id)}>Complete</button>
        <button className="removeTodoItem" onClick={()=> removeTodo(task.id)}>X</button>
      </div>
    </div>
  );
}

export default TodoItem;