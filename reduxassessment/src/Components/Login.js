import React, { Component } from 'react';
import { connect } from 'react-redux';
import {name,handleChange} from '../Action/LoginAction';
import history from './Register';
class Login extends Component {
    render() {
        return (
            <div>
                <label>UserName: </label>
                <input type="text" name="username" placeholder="Username" onChange={this.props.name}></input><br/><br/>
                <label>Password: </label>
                <input type="text" name="password" placeholder="password" onChange={this.props.name}></input><br/><br/>
                <button name="login" onChange={this.props.handleChange}>Login</button>
                <button name="register" onChange={this.props.handleChange}>Register</button>
                browserHistory.push('/Register');
            </div>
        );
    }
}
const mapStoreToProps=(state)=>
{
const {username,password}=state.LoginReducer;
return {username,password};
}
export default connect(mapStoreToProps,{name,handleChange})(Login);