import React from "react";
import { Redirect, Link } from "react-router-dom";

import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled(NavLink)`
  margin: 10px;
  color: black;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
`;

const UserCard = props => {
  const delUser = async id => {
    await props.deleteUser(id);
    return <Redirect to="/" />;
  };

  return (
    <StyledNav to={`/${props.user.id}`}>
      <div>
        <strong>{props.user.name}</strong>
        <p>{props.user.bio}</p>
        <p>
          <button onClick={() => delUser(props.user.id)}>
            <i className="far fa-trash-alt" />
          </button>
        </p>
      </div>
    </StyledNav>
  );
};

export default UserCard;
