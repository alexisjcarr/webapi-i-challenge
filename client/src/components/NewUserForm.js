import React, { Component } from "react";

class NewUserForm extends Component {
  state = {
    name: "",
    bio: ""
  };

  addUser = e => {
    e.preventDefault();
    this.props.addUser(this.state).then(() => this.props.history.push("/"));
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.addUser}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <input
          type="text"
          placeholder="bio"
          name="bio"
          value={this.state.bio}
          onChange={this.handleChange}
          required
        />
        <button type="submit">submit new user</button>
      </form>
    );
  }
}

export default NewUserForm;
