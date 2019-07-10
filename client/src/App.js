import React, { useState, useEffect } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import "./App.css";
import UsersList from "./components/UsersList";
import NewUserForm from "./components/NewUserForm";
// import EditUserForm from "./components/EditUserForm";
import OneUser from "./components/OneUser";

const StyledNav = styled(NavLink)`
  margin: 10px;
  color: black;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
`;

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
      <StyledNav to="/users">Home</StyledNav>
      {"    "}
      <StyledNav to="/form">Add New User</StyledNav>

      <Route
        exact
        path="/users"
        render={props => (
          <UsersList {...props} users={users} deleteUser={deleteUser} />
        )}
      />
      <Route
        exact
        path="/form"
        render={props => <NewUserForm {...props} addUser={addUser} />}
      />
      <Route
        exact
        path="/users/:id"
        render={props => (
          <OneUser
            {...props}
            users={users}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        )}
      />
      {/* <Route
        exact
        path="/users/:id"
        render={props => <EditUserForm {...props} editUser={editUser} />}
      /> */}
    </div>
  );
};

export default App;
