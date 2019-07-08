import React from "react";
import { Redirect, Link } from "react-router-dom";

import EditUserForm from "./EditUserForm";

const OneUser = props => {
  const user = props.users.find(user => `${user.id}` === props.match.params.id);

  const delUser = async id => {
    await props.deleteUser(id);
    return <Redirect to="/" />;
  };

  if (!user) {
    return <h1>Loading User... Please wait...</h1>;
  }

  return (
    <div className="User">
      <div>
        <strong>{user.name}</strong>
        <p>{user.bio}</p>
        <p>
          <button>
            <Link to="/form2">
              {" "}
              <i className="far fa-edit" />
            </Link>
          </button>{" "}
          <button onClick={() => delUser(user.id)}>
            <i className="far fa-trash-alt" />
          </button>
        </p>
      </div>
      <EditUserForm id={user.id} editUser={props.editUser} />
    </div>
  );
};

export default OneUser;
