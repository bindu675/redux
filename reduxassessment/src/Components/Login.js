// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import {username,password} from '../Action/LoginAction';

// class Login extends Component {
//     render() {
//         return (
//             <div>
//                 <label>UserName: </label>
//                 <input type="text" name="username" placeholder="Username" onChange={this.props.name}></input><br/><br/>
//                 <label>Password: </label>
//                 <input type="text" name="password" placeholder="password" onChange={this.props.name}></input><br/><br/>
//                 <button name="login">Login</button>
//                 <button name="register">Register</button>
//             </div>
//         );
//     }
// }
// const mapStoreToProps=(state)=>
// {
// const {username,password}=state.LoginReducer;
// return {username,password};
// }
// export default connect(mapStoreToProps,{username,password})(Login);




import React, { Component } from 'react';
import './Login.css';
import BrowserHistory from "./Utils/BrowserHistory";


const initialState = {
  name: "",
  password: "",
  nameError: "",
  passwordError: ""
};
export default class Login extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let passwordError = "";

    if (!this.state.name) {
      nameError = "Please enter your username.";
    }

    if (!this.state.password ){
        passwordError = "Please enter your password.";
    }

    if (passwordError || nameError) {
      this.setState({ passwordError, nameError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
    this.setState(initialState);
    }
  };
  onHandleClick(){
    BrowserHistory.push("/Register");
    }
  render() {
    return (
      <div>
       <h1>Login </h1>
      <form onSubmit={this.handleSubmit}>
        <div className="container">
          <label>UserName :</label>
          <input name="name" placeholder="name" value={this.state.name} onChange={this.handleChange}/>
          <div
          className="error" > {this.state.nameError}</div><br></br>
        </div>
        <div className="container1">
        <label>Password :</label>
          <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
          <div className="error">{this.state.passwordError}</div><br></br>
        </div>
       <div className="container2">
       <div ><button onClick={this.onHandleClick} className="button">Register</button></div>
       </div> 
      </form>
      <div className="container3">
          <button>Login</button>
      </div>
      </div>
    );
  }
}