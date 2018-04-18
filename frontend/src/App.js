import React from 'react';
import './App.css';
import Nav from "./Components/Nav";
import Logon from "./Components/Logon";
// import DollarDates from "./Components/DollarDates/DollarDates";


class App extends React.Component{
  render(){
    return(
    <div className="page">
      <Logon />
    </div>
    )
  }
}

export default App;
