import React from 'react';

const Todo = ({ contentToDo, handleDelete }) => (
    <li>
      {contentToDo.name} <button onClick={() => handleDelete(contentToDo.id)}>X</button>
    </li>
  );
  
  export default Todo;
  