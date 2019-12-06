import React, { Component } from 'react';
import { connect } from 'react-redux';
import {updateA,updateB} from '../Action/task2Action';

class Task2 extends Component {
    render() {
        return (
            <div>
             <a href="Task3">Task3</a>
               {this.props.a}
               {this.props.b} 
               
            <button onClick={()=>this.props.updateA(this.props.b)}>Update A</button>
            <button onClick={()=>this.props.updateB(this.props.a)}>Update B</button>
               
             
            </div>
        );
    }
}
const mapStoreToProps=(state)=>{
    const{a}=state.task2Reducer1;
    const{b}=state.task2Reducer2;
    
    return {a,b};

}

export default connect(mapStoreToProps,{updateA,updateB})(Task2);