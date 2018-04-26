import React from 'react'
import { Button, Table, Col, Card, CardTitle, MediaBox, Row, CardPanel, Dropdown, NavItem, Input } from "react-materialize";
import Nav from './Nav/Nav'
// import Yelp from './Yelp/Yelp'
import './MovieNight.css';
// import Config from './Yelp/Config'

const d = new Date();
const today = d.getFullYear() + '-' + ("0" + (d.getMonth() + 1)).slice(-2) + '-' + d.getDate();

class MovieNight extends React.Component {
  state = {
    genre: '',
    foodType: '',
    zipcode: '',
    haveAllUserData: false,
    restaurantdata: [{}],
    moviedata: [{}],
    date: today
  }


  // this.setState({date: today})


  handleUserSelection(type, selection) {
    console.log("selection", selection)
    this.setState({
      [type]: selection
    }, () => {
      this.haveAllUserData();
    })
  }

  haveAllUserData() {
    if (this.state.genre.length > 0 && this.state.foodType.length > 0 && this.state.zipcode.length === 5) {
      this.setState({ haveAllUserData: true });
    } else {
      this.setState({ haveAllUserData: false })
    }
  }

  returnYelp(yelpData) {
    this.setState({
      restaurantdata: yelpData
    })
  }

  getYelpData() {
    console.log(this.state.foodType)
    fetch('api/search', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({
        genre: this.state.genre,
        foodType: this.state.foodType,
        zipcode: this.state.zipcode,
        date: this.state.date
      })
    }).then((res) => {
      if (res.status === 503) {
        this.setState({
          sendSuccessful: false,
          isSent: false,
          isSending: false,
          sendFailure: true
        });
      }
      // console.log('res.json',res.json())
      return res.json();
    }).then((data) => {
      console.log('data', data)
      this.returnYelp(data.businesses);
    });
  }

  getMovieData() {
    fetch(`api/searchMovie`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({
          genre: this.state.genre,
          foodType: this.state.foodType,
          zipcode: this.state.zipcode,
          date: this.state.date
        })
      }
    ).then((res) => {
      return res.json();
    }).then((data) => {
      console.log('moviedata', data)
      this.setState({ moviedata: data });
    });
  }

  render() {
    // console.log('State from MovieNight', this.state.restaurantdata[0])
    // this.newDate()
    return (

      <div>
        <Nav />
        <div className="movienight-page container">
          <Row>
            <Col className="offset-s5" s={4}>
              <Input name='zipcode' label='Enter Zip Code' className="zipcode" value={this.state.zipcode} onChange={(event) => { this.handleUserSelection('zipcode', event.target.value) }} />
            </Col>
          </Row>
          <Row id='selection-div'>
            <Col s={6}>
              <div className="movieDiv">
                <Card className='small' header={<CardTitle key="movie" image="/img/film.jpg">Movie Options</CardTitle>}>
                  <Dropdown trigger={<Button>Movie Genre</Button>}>
                    <NavItem className="action" onClick={() => { this.handleUserSelection('genre', 'action') }}>Action</NavItem>
                    <NavItem className="adventure" onClick={() => { this.handleUserSelection('genre', 'adventure') }}>Adventure</NavItem>
                    <NavItem className="animation" onClick={() => { this.handleUserSelection('genre', 'animation') }}>Animation</NavItem>
                    <NavItem className="documentary" onClick={() => { this.handleUserSelection('genre', 'documentary') }}>Documentary</NavItem>
                    <NavItem className="sciencFiction" onClick={() => { this.handleUserSelection('genre', 'scifi') }}>Science Fiction</NavItem>
                  </Dropdown>
                  <Button className="findMovie" disabled={!this.state.haveAllUserData} onClick={this.getMovieData.bind(this)}>Find Movie</Button>
                </Card>
              </div>
            </Col>

            <Col s={6}>
              <div className="dinnerDiv">
                <Card className='small' header={<CardTitle image="/img/tea.jpg">Dinner Options</CardTitle>}>
                  <Dropdown trigger={<Button>Cuisine</Button>} >
                    <NavItem className="america" onClick={() => { this.handleUserSelection('foodType', 'tradamerican') }} >American</NavItem>
                    <NavItem className="bbq" onClick={() => { this.handleUserSelection('foodType', 'bbq') }}>BBQ</NavItem>
                    <NavItem className="brewery" onClick={() => { this.handleUserSelection('foodType', 'breweries') }}>Brewery</NavItem>
                    <NavItem className="chinese" onClick={() => { this.handleUserSelection('foodType', 'chinese') }}>Chinese</NavItem>
                    <NavItem className="ethiopian" onClick={() => { this.handleUserSelection('foodType', 'ethiopian') }}>Ethiopian</NavItem>
                    <NavItem className="indian" onClick={() => { this.handleUserSelection('foodType', 'indian') }}>Indian</NavItem>
                    <NavItem className="italian" onClick={() => { this.handleUserSelection('foodType', 'italian') }}>Italian</NavItem>
                    <NavItem className="japanese" onClick={() => { this.handleUserSelection('foodType', 'japanese') }}>Japanese</NavItem>
                    <NavItem className="mediterranean" onClick={() => { this.handleUserSelection('foodType', 'mediterranean') }}>Mediterranean</NavItem>
                    <NavItem className="mexican" onClick={() => { this.handleUserSelection('foodType', 'mexican') }}>Mexican</NavItem>
                    <NavItem className="nepalese" onClick={() => { this.handleUserSelection('foodType', 'nepalese') }}>Nepalese</NavItem>
                  </Dropdown>
                  <Button className="findDate" disabled={!this.state.haveAllUserData} onClick={this.getYelpData.bind(this)} >Find Restaurant</Button>
                </Card>
              </div>
            </Col>
          </Row>
          <Row>
            <Col s={6}> <h3 className="center-align"> {this.state.genre} </h3></Col>
            <Col s={6}><h3 className="center-align">{this.state.foodType}</h3></Col>
          </Row>
          <Row>

            <Col hidden={!this.state.haveAllUserData} className="movie-results" s={6}>
              {this.state.moviedata.map((data, i) => (
                <div key={i}>
                  <div class="col s12">
                    <div class="card small horizontal">
                      <div class="card-image">
                        <img src="../../img/popcorn.jpg" />
                      </div>
                      <div class="card-stacked">
                        <div class="card-content">
                          <h5>{data.title}</h5> <br />
                          <p>{data.shortDescription}</p><br />
                          <p>Theater: </p>
                          <p>Showtimes: </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Col>
            <Col hidden={!this.state.haveAllUserData} className="dinner-results" s={6}>
              {this.state.restaurantdata.map((business, i) => (
                <div key={i}>
                  <div class="col s12">
                    <div class="card small horizontal">
                      <div class="card-image">
                        <img src={business.image_url} />
                      </div>
                      <div class="card-stacked">
                        <div class="card-content">
                          <h5>{business.name}</h5>
                          <p>Address: </p><br />
                          <p>Phone Number: {business.display_phone}</p><br />
                          <p>Price: {business.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </div>
        <div class="Footer">
          Date Night 2018. All Rights Reserved.
        </div>

      </div>

    )
  }
}

export default MovieNight;