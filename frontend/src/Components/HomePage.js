import React from 'react';
import Nav from './Nav/Nav';
import { Button, Card, Col, Input, Row, CardTitle, MediaBox, CardPanel, Dropdown, NavItem, Footer } from "react-materialize";
import "../App.css";
import "./Logon/Logon";

class HomePage extends React.Component{
    render(){
        return(

            <div>
            
                <div className="home-page">
                <Nav />

                <div className="mainBG">
                <div class="content" >


    <div class="row">
        <div class="row">
            <div class="col s12 m4 l2"><p></p></div>
            <div class="col s12 m4 l8"><p><h2>Find the Best Date Places in Town</h2></p></div>
            <div class="col s12 m4 l2"><p></p></div>
        </div>
    </div>


<div class="circles-parent">
            
    <div class="square"><img src="/img/moviedinner.jpg" style={{width: 250, height: 200}} /> 
    <p><a href="movienight">Dinner & Movie</a></p>
    </div>
            
 
    <div class="square"><img src="/img/spinthewheel3.jpg" style={{width: 250, height: 200}} />
    <p><a href="wheel">Spin the Wheel</a></p>
    </div>


    <div class="square"><img src="/img/dollardates3.jpg" style={{width: 250, height: 200}} />
    <p><a href="dollardates">Dollar Dates</a></p>
    </div>

 
    <div class="square"><img src="/img/saved.jpg" style={{width: 250, height: 200}} />
    <p><a href="#">Saved Dates</a></p>
    </div>

</div>


</div>
</div>

{/* Footer Start */}
<div class="Footer">
Date Night 2018. All Rights Reserved.
</div>
{/* Footer End */}

            </div>       
            
</div>
        )
    }
}

export default HomePage;
