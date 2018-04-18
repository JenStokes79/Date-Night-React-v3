import React from 'react'
import Nav from './Nav/Nav'
import { Button, Card, Col, Input, Row } from "react-materialize"
import Spinner from "./Spinner/Spinner"
// import {test} from "../helpers"

class Wheel extends React.Component{
    render(){
        return <div className="wheel-page">
            <Nav logout={this.props.logout}/>
            <Spinner />
          </div>;
    }
}

export default Wheel