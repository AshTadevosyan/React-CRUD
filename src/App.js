import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from 'react-router-dom';
import Users from "./component/Users/Users";
import AddUser from "./component/AddUser/AddUser";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
         <Users userData ={this.props.userData} />
         <Route path ="/add_user"  
                               render ={ () => <AddUser />} /> 
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.userReducer
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
