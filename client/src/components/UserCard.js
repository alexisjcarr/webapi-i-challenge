import React from "react";
import { Redirect, NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled(NavLink)`
  margin: 10px;
  color: black;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
`;

const Card = styled.div`
  border-radius: 50px;
  padding: 10px;
  width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  margin: 0 auto;
`;

const UserCard = props => {
  const delUser = async id => {
    await props.deleteUser(id);
    return <Redirect to="/users" />;
  };

  return (
    <StyledNav to={`users/${props.user.id}`}>
      <Card>
        <div>
          <strong>{props.user.name}</strong>
          <p>{props.user.bio}</p>
          <p>
            <button onClick={() => delUser(props.user.id)}>
              <i className="far fa-trash-alt" />
            </button>
          </p>
        </div>
      </Card>
    </StyledNav>
  );
};

export default UserCard;
