import React from "react";

import UserCard from "./UserCard";

const UsersList = props => {
  return (
    <div style={{ textAlign: "center" }}>
      {props.users.map(user => (
        <UserCard key={user.id} user={user} deleteUser={props.deleteUser} />
      ))}
    </div>
  );
};

export default UsersList;
