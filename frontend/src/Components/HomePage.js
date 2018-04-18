import React from 'react'
import Nav from './Nav/Nav'
import { Button, Card, Col, Input, Row } from "react-materialize"

class HomePage extends React.Component{
    render(){
        return(
            <div className="home-page">
                <Nav logout={this.props.logout}/>
                <div>this is the homepage</div>
            </div>
        )
    }
}

export default HomePage