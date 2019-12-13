// import React, { Component } from 'react';

// class Users extends Component {
//   render() {
//     return (
//       <div className="todoListMain">
//         <div className="header">
//           <form onSubmit={this.addItem}>
//             <input ref={(a) => this._inputElement = a} 
//                     placeholder="enter task">
//             </input>
//             <button type="submit">add</button>
//           </form>
//         </div>
//       </div>
//     );
//   }
//   }
//   addItem(e) {
//     if (this._inputElement.value !== "") {
//       var newItem = {
//         text: this._inputElement.value,
//          key: Date.now()
//       }
    
   
//       this.setState((prevState) => {
//         return { 
//           items: prevState.items.concat(newItem) 
//         };
//       });
     
//       this._inputElement.value = "";
//     }
  
     
//     console.log(this.state.items);
       
//     e.preventDefault();
//   }
//   var newItem = {
//     text: this._inputElement.value,
//     key: Date.now()
//   };
//   this.setState((prevState) => {
//     return { 
//       items: prevState.items.concat(newItem) 
//     };
//   });



// export default Users;