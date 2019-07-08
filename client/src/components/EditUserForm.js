import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class EditUserForm extends Component {
  state = {
    name: "",
    bio: ""
  };

  editUser = async e => {
    e.preventDefault();
    await this.props.editUser(this.props.id, this.state);
    return <Redirect exact to="/" />;
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.editUser}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="bio"
          name="bio"
          value={this.state.bio}
          onChange={this.handleChange}
        />
        <button type="submit">submit edited user</button>
      </form>
    );
  }
}

export default EditUserForm;
