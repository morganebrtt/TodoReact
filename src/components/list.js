import React, {useState} from 'react';
import Todo from './Todo';
import InputForm from './InputForm';

const List = () => {
    const [toDos, setToDos] = useState([
        { id : 1 , name : "revoir React"},
        { id: 2, name: "continuer à apprendre les hooks"}
    ]);

    const handleDelete = (id) => {
        const updatedTodos = [...toDos];
        const index = updatedTodos.findIndex(todo => todo.id === id);

        updatedTodos.splice(index, 1);

        setToDos(updatedTodos);
    };

    const handleAdd = (todo) => {
        const updatedTodos = [...toDos];
        updatedTodos.push(todo);
  
        setToDos(updatedTodos);
    };

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
            <InputForm handleAdd={handleAdd}/>
        </div>
    );
}

export default List;
