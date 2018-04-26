import React, { Component } from 'react'
import Nav from './Nav/Nav'
// import { Button, Card, Col, Input, Row } from "react-materialize"
import Spinner from "./Spinner/Spinner"
import {searchActivity} from "../helpers"
import Result from "./Result"
import App from "../App.css"


class Wheel extends Component {

    constructor(props) {
        super(props);
    }
  
    render(){
        return(
            <div className="wheel-page">
                <Nav />
                <Spinner setWheelDate={this.props.setWheelDate} />
                
                {/* Footer Start */}
                <div class="Footer">
                Date Night 2018. All Rights Reserved.
                </div>
                {/* Footer End */}


            </div>
        )

        
    }
    
}

export default Wheel