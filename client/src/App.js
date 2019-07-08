import React, { useState, useEffect } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";

import "./App.css";
import UsersList from "./components/UsersList";
import NewUserForm from "./components/NewUserForm";
import EditUserForm from "./components/EditUserForm";
import OneUser from "./components/OneUser";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/users`)
      .then(res => {
        console.log(res);
        setUsers(res.data);
      })
      .catch(err => console.log(err));
  }, [users]);

  const deleteUser = id => {
    return axios
      .delete(`http://localhost:8080/api/users/${id}`)
      .then(delUser => console.log(`User ${id} deleted`))
      .catch(err => console.log(err));
  };

  const addUser = formInfo => {
    return axios
      .post(`http://localhost:8080/api/users/`, formInfo)
      .then(newUser => console.log(`User created!`))
      .catch(err => console.log(err));
  };

  const editUser = (id, info) => {
    return axios
      .put(`http://localhost:8080/api/users/${id}`, info)
      .then(updated => console.log(updated))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <NavLink to="/form">Add New User</NavLink>

      <Route
        exact
        path="/"
        render={props => (
          <UsersList {...props} users={users} deleteUser={deleteUser} />
        )}
      />
      <Route
        path="/form"
        render={props => <NewUserForm {...props} addUser={addUser} />}
      />
      <Route
        path="/form2"
        render={props => <EditUserForm {...props} editUser={editUser} />}
      />
      <Route
        path="/:id"
        render={props => (
          <OneUser {...props} users={users} deleteUser={deleteUser} />
        )}
      />
    </div>
  );
};

export default App;
