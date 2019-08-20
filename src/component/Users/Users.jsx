import React ,{ Component } from  "react";
import UserItem from "./UserItem/UserItem";
import Class from "./Users.module.css";
import { NavLink } from 'react-router-dom';

class Users extends Component {
  render() {
    return (
      <div>
        <div className ={Class.header}>
           <h3><NavLink to ='/'>Users</NavLink></h3>
        </div>
           {this.props.userData.map((userReducer, reducer) => (
           <UserItem {...userReducer} id ={userReducer.id} /> ))}
        <NavLink to='/add_user'><button className ={Class.btn} >Add new User</button></NavLink>
      </div>
       );
  }
}
export default Users;
