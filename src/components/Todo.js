import React from 'react';

const Todo = ({ details, onDelete }) => (
    <li>
      {details.name} <button onClick={() => onDelete(details.id)}>X</button>
    </li>
  );
  
  export default Todo;
  