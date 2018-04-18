import React from 'react'
import { Button, Table, Col, Card, CardTitle, MediaBox, Row, CardPanel, Dropdown, NavItem } from "react-materialize";
import Nav from './Nav/Nav'
import {searchRestaurant} from "../helpers"



class MovieNight extends React.Component{
    render()
    {
        return <div>
            {searchRestaurant()}
            <Nav logout={this.props.logout}/>
            <h1>This is going to be the movie night page.</h1>

            <Row>
              <Col s={3}>
                <h5>Movie</h5>
                <div>
                  <Dropdown trigger={<Button>Select</Button>}>
                    <NavItem>Action</NavItem>
                    <NavItem>Adventure</NavItem>
                    <NavItem>Animation</NavItem>
                    <NavItem>Documentary</NavItem>
                    <NavItem>Science Fiction</NavItem>
                  </Dropdown>
                </div>
                <Card header={<CardTitle image="http://lorempixel.com/100/100/" />} actions={[<a href="#">
                      This is a link
                    </a>]}>
                  <p>
                    I am a very simple card. I am good at containing
                    small bits of information
                  </p>
                </Card>
              </Col>

              <Col s={3}>
                <div>
                  <h2>OR</h2>
                </div>
              </Col>

              <Col s={3}>
                <h5>Dinner</h5>
                <Dropdown trigger={<Button>Select</Button>}>
                  <NavItem>American</NavItem>
                  <NavItem>BBQ</NavItem>
                  <NavItem>Brewery</NavItem>
                  <NavItem>Chinese</NavItem>
                  <NavItem>Ethiophian</NavItem>
                  <NavItem>Indian</NavItem>
                  <NavItem>Italian</NavItem>
                  <NavItem>Japanese</NavItem>
                  <NavItem>Mediterranean</NavItem>
                  <NavItem>Mexican</NavItem>
                  <NavItem>Nepalese</NavItem>
                </Dropdown>
                <Card header={<CardTitle image="http://lorempixel.com/100/100/" />} actions={[<a href="#">
                      This is a link
                    </a>]}>
                  <p>
                    I am a very simple card. I am good at containing
                    small bits of information
                  </p>
                </Card>
              </Col>
            </Row>

            <Button>Go!</Button>
          </div>;
    }
}

export default MovieNight
