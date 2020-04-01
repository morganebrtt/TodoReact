import React, { useState } from 'react';

const InputForm = ({handleAdd}) => {
    const [newToDo, setNewToDo] = useState("");

    const handleChange = event => {
        setNewToDo (event.currentTarget.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        const id = new Date().getTime();
        const name = newToDo;

        handleAdd({id, name});

        setNewToDo ("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            value={newToDo} 
            onChange={handleChange} 
            type="text"
            placeholder="ajouter une to do"
            />
        </form>
    );
};

export default InputForm;