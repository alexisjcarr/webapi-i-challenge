import React from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

import EditUserForm from "./EditUserForm";

const Card = styled.div`
  border-radius: 50px;
  padding: 10px;
  width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  margin: 0 auto;
`;

const OneUser = props => {
  const user = props.users.find(user => `${user.id}` === props.match.params.id);

  const delUser = async id => {
    await props.deleteUser(id);
    return <Redirect to="/users" />;
  };

  if (!user) {
    return <h1>Loading User... Please wait...</h1>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Card>
        <strong>{user.name}</strong>
        <p>{user.bio}</p>
        <p>
          <button onClick={() => delUser(user.id)}>
            <i className="far fa-trash-alt" />
          </button>
        </p>
      </Card>
      <EditUserForm id={user.id} editUser={props.editUser} />
    </div>
  );
};

export default OneUser;
