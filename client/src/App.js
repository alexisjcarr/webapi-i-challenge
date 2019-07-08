import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import UserCard from "./components/UserCard";

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
  }, []);

  const deleteUser = id => {
    axios
      .delete(`http://localhost:8080/api/users/${id}`)
      .then(delUser => console.log(`User ${id} deleted`))
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      {users.map(user => (
        <UserCard key={user.id} user={user} deleteUser={deleteUser} />
      ))}
    </div>
  );
};

export default App;
