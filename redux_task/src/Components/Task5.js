import React, { Component } from 'react';
import { connect } from 'react-redux';
import {handleChange,check} from '../Action/task5Action';

class Task5 extends Component {
  render() {
    return (
      <div>
        <a href ="Task6">Task6</a>
        <input type="number" name="number1" placeholder="FirstOperand" onChange={this.props.handleChange}/>
        <select name="operator" onChange={this.props.handleChange}>
          <option>Operator</option>
          <option>+</option>
          <option>-</option>
          <option>*</option>
          <option>/</option>
        </select>
        <input type="number" name="number2" placeholder="SecondOperand" onChange={this.props.handleChange}/>
        <input type="number" name="result" placeholder="Result" onChange={this.props.handleChange}/>
        <button onClick={this.props.check}>Check</button>
         <h1>{this.props.number1}</h1>
         <h1>{this.props.number2}</h1>
         <h1>{this.props.operator}</h1>
         <h1>{this.props.result}</h1>
         <h1>{this.props.msg}</h1>
      </div>
    );
}
}
const mapStoreToProps=(state)=>
{
const {number1,number2,operator,result,msg }=state.task5Reducer1;
return {number1,number2,operator,result,msg};
};
export default connect(mapStoreToProps,{handleChange,check})(Task5);