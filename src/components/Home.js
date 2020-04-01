import React, { useState, useEffect } from "react";
import Title from "./Title";
import List from "./List";
import InputForm from "./InputForm";

const Home = () => {
  const [toDos, setToDos] = useState([
    { id: 1, name: "revoir React" },
    { id: 2, name: "continuer à apprendre les hooks" }
  ]);

  useEffect(() => {
    const localStorageToDos = localStorage.getItem("myToDos");
    if (localStorageToDos) {
      setToDos(JSON.parse(localStorageToDos));
    }
  }, [setToDos]);

  const handleDelete = id => {
    const updatedTodos = [...toDos];
    const index = updatedTodos.findIndex(todo => todo.id === id);

    updatedTodos.splice(index, 1);

    setToDos(updatedTodos);

    localStorage.setItem("myToDos", JSON.stringify(updatedTodos));
  };

  const handleAdd = todo => {
    if (todo.name) {
      const updatedTodos = [...toDos];
      updatedTodos.push(todo);

      setToDos(updatedTodos);

      localStorage.setItem("myToDos", JSON.stringify(updatedTodos));
    }
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
