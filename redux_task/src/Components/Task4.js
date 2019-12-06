import React, { Component } from 'react';
import { connect } from 'react-redux';
import {onadd,onsub,INCREMENT} from '../Action/task4Action';

class Task4 extends Component {
    render() {
        return (
          <div>
            <span>Number:{this.props.num}</span><br/>
            <button onClick={this.props.onadd}>+</button>
            <button onClick={this.props.onsub}>-</button>
            <button onClick={this.props.INCREMENT}>if number even,increment</button>
          </div>
        );
    }
}
const mapStoreToProps=(state)=>
{
const { num }=state.task4Reducer1;
return { num};
}

export default connect(mapStoreToProps,{onadd,onsub,INCREMENT})(Task4);