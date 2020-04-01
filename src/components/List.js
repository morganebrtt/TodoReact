import React from 'react';
import Todo from './Todo';

const List = ({ toDos, handleDelete }) => {
    
    return(
        <div>
            <ul>
                {toDos.map(todo => (
                    <Todo 
                    key={todo.id}
                    contentToDo={todo}
                    handleDelete={handleDelete}
                    />
                ))}      
            </ul>
        </div>
    );
}

export default List;
