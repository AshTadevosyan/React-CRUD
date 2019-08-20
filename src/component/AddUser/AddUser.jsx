import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import Class from "./AddUser.module.css";
import { NavLink } from 'react-router-dom';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      number: "",
      birth: ""
    };
  }

  handleChange = event => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState({ state });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addPost(this.state.fname, this.state.lname, this.state.email,this.state.number,this.state.birth);
  };

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <h3>Add User</h3>
          <div className ={Class.close}><NavLink to ='/'>x</NavLink></div>
          <div className ={Class.inputCont}>
            <input onChange={this.handleChange} value={this.state.fname}   type="text"   placeholder="Ash"
                                                                           name="fname"  required />
            <input onChange={this.handleChange} value={this.state.lname}   type="text"   placeholder="Tadevosyan"
                                                                           name="lname"  required />
            <input onChange={this.handleChange} value={this.state.email}   type="email"  placeholder="ash.tadevosyan.2020@gmail.com"
                                                                           name="email"  required />
            <input onChange={this.handleChange} value={this.state.number}  type="text"   placeholder="+37477008977"
                                                                           name="number" required />
            <input onChange={this.handleChange} value={this.state.birth}   type="birth"  placeholder="10.01.1996"
                                                                           name="birth"  required />
            <button className ={Class.submit}>Sumbit</button>
        </div>
        </form>
      
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: (fname, lname, email, number, birth) => {
      dispatch(actions.addPost(fname, lname, email, number, birth));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddUser);
