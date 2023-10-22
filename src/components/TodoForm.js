import React, { useState } from 'react';

function TodoForm({onAddTodo}) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

   onAddTodo(value);
   setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="itemInput" value={value} onChange={handleChange} />
      <button className="addItemButton" type='submit'>Add Item</button>
    </form>
  );
}

export default TodoForm;