import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import HomePage from './Components/HomePage'
import MovieNight from './Components/MovieNight'
import Wheel from './Components/Wheel'
import DollarDates from './Components/DollarDates'
import NoMatch from './Components/NoMatch'
import Logon from './Components/Logon'
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

class Root extends Component {
    state = {
        wheelDate: '',
        movieDate: ''
    }

    setWheelDate = (date) => {
        this.setState({
            wheelDate: date
        });
        //TODO: Make API call here using the date from the wheel
        /**
         * fetch('path/to/api', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify({
                date
            })
        }).then((res) => {
            if (res.status === 503) {
                this.setState({
                    //set error state here
                });
            }
            return res.json();
        }).then((data) => {
            //set state with data received from API
        });
         */
    }

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        return(
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component = {App} />
                        <Route exact path="/movienight" component = {MovieNight} />
                        <Route exact path="/wheel" component={() => (<Wheel setWheelDate={this.setWheelDate} />)} />
                        <Route exact path="/dollardates" component={DollarDates} />
                        <Route exact path="/homepage" component = {HomePage} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </Router>
        )
    }
}


ReactDom.render(<Root />, document.querySelector('#root'))