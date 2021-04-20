import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export const userContext = React.createContext("user");

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      name: "test",
      email: "test",
      password: "test",
    },
  ]);
  const [proyects, setProyects] = useState([{ userEmail: "", name: "" }]);
  const [tasks, setTasks] = useState([{ id: "", name: "", isComplete: false, proyectId: "" }]);

  function createUser(newUser) {
    const newUsers = [...users, { ...newUser, email: newUser.email.toLowerCase() }];
    setUsers(newUsers);
  }

  function signIn(user) {
    const userFound = users.filter(
      (userItem) =>
        userItem.email == user.email.toLowerCase() && userItem.password == user.password,
    );

    return userFound.length ? true : false;
  }

  function newProyect(userEmail, proyectName) {
    const newProyects = [...proyects, { id: uuid(), userEmail, name: proyectName }];
    setProyects(newProyects);
  }

  function getProyectsUser(userEmailArg) {
    return proyects.filter(({ userEmail }) => userEmail === userEmailArg);
  }

  function newTask(id, name) {
    const newTasks = [...tasks, { id: uuid(), name, isComplete: false, proyectId: id }];
    setTasks(newTasks);
  }

  function getTasks(idProyect) {
    const tasksProyect = tasks.filter(({ proyectId }) => proyectId === idProyect);
    return tasksProyect;
  }

  function updateTask(id, newValue) {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, isComplete: newValue } : task,
    );
    setTasks(newTasks);
  }

  function removeTask(idTask) {
    const newTasks = tasks.filter(({ id }) => id !== idTask);
    setTasks(newTasks);
  }

  return (
    <userContext.Provider
      value={{
        users,
        proyects,
        tasks,
        getProyectsUser,
        createUser,
        signIn,
        newProyect,
        newTask,
        getTasks,
        updateTask,
        removeTask,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
