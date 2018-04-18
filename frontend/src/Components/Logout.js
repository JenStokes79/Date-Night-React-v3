
// import React, { Component } from "react";
// import { Button, Card, Col, Input, Row, Modal, Slider, Slide } from "react-materialize";
// import "whatwg-fetch";

// import { getFromStorage, setInStorage } from "../utils/storage";

// class Logout extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isLoading: true,

//     },


//     this.logout = this.logout.bind(this);
//   }

 

//  handleClick() {

//      this.setState({
//          isLoading: true,
//         });
//         const obj = getFromStorage("Date_Night");
//         if (obj && obj.token) {
//             const { token } = obj;
//             //verifying token
//             fetch("api/account/logout?token=" + token)
//             .then(res => res.json())
//             .then(json => {
//                 if (json.success) {
//                     this.setState({
//                         token: "", 
//                         isLoading: false 
//                     });
//                     console.log("before");
//                 } else {
//                     this.setState({ 
//                         isLoading: false 
//                     });
//                 }
//             });
//         } else {
//             this.setState({ 
//                 isLoading: false 
//             });
//         } console.log('after')
        
//     };

// };

// // export default Logout;