import React from "react";

const UserCard = props => {
  const delUser = id => {
    props.deleteUser(id);
    window.location.reload();
  };

  return (
    <div>
      <p>
        {props.user.name}{" "}
        <button>
          <i className="far fa-edit" />
        </button>{" "}
        <button onClick={() => delUser(props.user.id)}>
          <i className="far fa-trash-alt" />
        </button>
      </p>
    </div>
  );
};

export default UserCard;
