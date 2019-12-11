import React, { Component } from 'react';
import { connect } from 'react-redux';
import {redSwitch, blueSwitch, greenSwitch, yellowSwitch, whiteSwitch} from '../Action/task6Action';
import './Task6.css';
class Task6 extends Component {
  render() {
    return (
      

  <div className={this.props.color}>
    <button onClick={this.props.redSwitch} onMouseOver={this.props.blueSwitch} onDoubleClick={this.props.whiteSwitch}>Red</button>
    <button onClick={this.props.blueSwitch} onMouseOver={this.props.greenSwitch} onDoubleClick={this.props.whiteSwitch}>Blue</button>
    <button onClick={this.props.greenSwitch} onMouseOver={this.props.yellowSwitch} onDoubleClick={this.props.whiteSwitch}>Green</button>
    <button onClick={this.props.yellowSwitch} onMouseOver={this.props.redSwitch} onDoubleClick={this.props.whiteSwitch}>Yellow</button>
  </div>
);


  }
}
const mapStoreToProps=(state)=>
{
const { color }=state.task6Reducer1;
return {color};
}
export default connect(mapStoreToProps,{redSwitch, blueSwitch, greenSwitch, yellowSwitch, whiteSwitch})(Task6);