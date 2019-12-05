import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateA, updateB, updateC, update_D } from '../Action/task3Action';
import './Task3.css';

class Task3 extends Component {
  render() {
    return (
      <div className="container">
       <div> A:{this.props.a}</div>
       <div>B:{this.props.b}</div>
       <div>C:{this.props.c}</div>
       <div>D:{this.props.d}</div>
       <div><button onClick={() => this.props.updateA(this.props.c)}>Update A</button></div>
       <div> <button onClick={() => this.props.updateB(this.props.d)}>Update B</button></div>
       <div> <button onClick={() => this.props.updateC(this.props.a)}>Update C</button></div>
       <div> <button onClick={() => this.props.update_D(this.props.b)}>Update D</button></div>
      </div>
    );
  }
}
const mapStoreToProps = (state) => {
  const { a } = state.task2Reducer1;
  const { b } = state.task2Reducer2;
  const { c } = state.task2Reducer3;
  const { d } = state.task2Reducer4;
  return { a, b, c, d };

}

export default connect(mapStoreToProps, { updateA, updateB, updateC, update_D })(Task3);