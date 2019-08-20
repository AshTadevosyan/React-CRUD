import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import Class from "./UserItem.module.css";
import { NavLink } from 'react-router-dom';


class  UserItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      fname: this.props.fname,
      lname: this.props.lname,
      email: this.props.email,
      number: this.props.number,
      birth: this.props.birth
    };
  }

  handleChangeFname = event => {
    this.setState({ fname: event.target.value });
  };
  handleChangeLname = event => {
    this.setState({ lname: event.target.value });
  };
  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };
  handleChangeNumber = event => {
    this.setState({ number: event.target.value });
  };
  handleChangeBirth = event => {
    this.setState({ birth: event.target.value });
  };

  removePost = () => {
    this.props.removePost(this.props.id);
  };

  updatePost = () => {
    this.setState({ isEdit: true });
  };

  donePost = () => {
    this.props.updatePost(this.props.id, this.state.fname,
                          this.state.lname, this.state.email,
                          this.state.number, this.state.birth);
    this.setState({ isEdit: false });
  };

  renderFnameInput = () => {
    return (
      <input onChange={this.handleChangeFname} defaultValue={this.props.fname}
                                               type="text"
                                               className ={Class.inputFname}
                                               required
                                               />
    );
  };
  renderLnameInput = () => {
    return (
      <input onChange={this.handleChangeLname} defaultValue={this.props.lname}
                                               type="text"
                                               className ={Class.inputLname}
                                               required
                                               />
    );
  };
  renderEmailInput = () => {
    return (
      <input onChange={this.handleChangeEmail} defaultValue={this.props.email}
                                               type="text"
                                               className ={Class.inputEmail}
                                               required
                                               />
    );
  };
  renderNumberInput = () => {
    return (
      <input onChange={this.handleChangeNumber} defaultValue={this.props.number}
                                               type="text"
                                               className ={Class.inputEmail}
                                               required
                                               />
    );
  };
  renderBirthInput = () => {
    return (
      <input onChange={this.handleChangeBirth} defaultValue={this.props.birth}
                                               type="text"
                                               className ={Class.inputEmail}
                                               required
                                               />
    );
  };

  renderUpdateButton = () => {
    return (
      <button onClick={this.updatePost}>
        Edit
      </button>
    );
  };

  renderDoneButton = () => {
    return (
      <button onClick={this.donePost} className ={Class.doneBtn}>
        Done
      </button>
    );
  };
 
  render() {
    let path = "/users/:id-" + this.props.id;
   return (
     <div>
     <NavLink to= {path}> 

       <div className ={Class.users} >
       <div className ={Class.item}>
            <div>
              {this.state.isEdit ? this.renderFnameInput() : this.props.fname + " "}
            </div>
            <div>
              {this.state.isEdit ? this.renderLnameInput() : this.props.lname + " "}
            </div>
            <div className ={Class.email}>
              {this.state.isEdit ? this.renderEmailInput() : this.props.email}
            </div>
             {this.state.isEdit ? this.renderNumberInput() : this.props.none}
             {this.state.isEdit ? this.renderBirthInput() : this.props.none}
            {this.state.isEdit
                 ? this.renderDoneButton()
                 : this.renderUpdateButton()}
            <button onClick={this.removePost} className={Class.removeBtn} >
              Delete
            </button>
            <NavLink to='id'><button>See more</button></NavLink>
         </div>
       </div>
      </NavLink>  
     </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removePost: id => {
      dispatch(actions.removePost(id));
    },
    updatePost: (id, fname, lname, email,number,birth) => {
      dispatch(actions.updatePost(id, fname, lname, email,number,birth));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UserItem);
