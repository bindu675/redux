import React, { Component } from 'react';
import { connect } from 'react-redux';
import {firstname,secondname,username,Password,register} from '../Action/RegisterAction';


class Register extends Component {
    render() {
        return (
            <div>
                <label>FirstName</label>
                <input type="text" name="firstname" placeholder="FirstName" onChange={this.props.handleChange}></input>
                <label>SecondName</label>
                <input type="text" name="secondname" placeholder="SecondName" onChange={this.props.handleChange}></input>
                <label>UserName</label>
                <input type="text" name="username" placeholder="UserName" onChange={this.props.handleChange}></input>
                <label>Password</label>
                <input type="text" name="Password" placeholder="Password" onChange={this.props.handleChange}></input>
                <button name="register" onChange={this.props.handleChange}>Register</button>
                <button name="cancel" onChange={this.props.handleChange}>Cancel</button>
            </div>
        );
    }
}
const mapStoreToProps=(state)=>
{
const { firstname,secondname,username,Password,register}=state.RegisterReducer;
return {firstname,secondname,username,Password,register};
}
export default connect(mapStoreToProps,{firstname,secondname,username,Password,register})(Register);