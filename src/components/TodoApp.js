import React, {useState} from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import {nanoid} from "nanoid";

function TodoApp() {
const [todos, setTodos] = useState([]);

const addTodo = todo => {
if (todo.length === 0) {alert("Field must be filled!")} else {
setTodos([...todos, {id: nanoid(), task: todo, completed: false}])}
};

const toggleComplete = id =>{setTodos(todos.map(todo=> todo.id === id ? {...todo,
completed: !todo.completed}:todo))}

const removeTodo = todoId=>{
setTodos(todos.filter(({id})=> id !== todoId))
};

  return (
    <div className="app">
    <h1>Get Things Done!</h1>
      <div className="todo-list">
        <TodoForm onAddTodo={addTodo}/>
        {todos.map(todo => (<TodoItem task={todo} key={todo.id} toggleComplete={toggleComplete}
        removeTodo={removeTodo}/>))}
      </div>
    </div>
  );
}

export default TodoApp;