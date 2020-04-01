import React, {useState} from 'react';
import Title from './Title';
import List from './List';
import InputForm from './InputForm';

const Home = () => {
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

    return (
        <>
        <Title name="To Do List" />
        <List toDos={toDos} handleDelete={handleDelete} />
        <InputForm handleAdd={handleAdd} />
        </>
    );
};

export default Home;