import React from 'react'
import Nav from './Nav/Nav'
import { Button, Card, Col, Input, Row, CardTitle } from "react-materialize"
import "./DollarDates"

class DollarDates extends React.Component {
    render() {
        return (
            <div>
                <div className="dollar-page">
                    <Nav />
                    <div class="container">
                        <div><h2 className="center-align">Awesome Date Ideas Under Budget</h2></div>
                        <div class="dollardatetitle">Sunset Bike Ride</div>
                        <Card className='large' header={<CardTitle image='/img/dollardate-page1-.jpg'></CardTitle>} actions={[<a href='#'></a>]}><div style={{ color: "#566573" }}>The idea started in—where else?—Portland, Oregon. But now many cities have rolled out similar programs that allow folks to cruise around on rented two-wheelers on the cheap. Grab some cruisers and explore the local scene for a few hours.</div>
                        </Card>
                        <div class="dollardatetitle">Discover a new museum</div>
                        <Card className='large' header={<CardTitle image='/img/dollardate-page2-.jpg'></CardTitle>} actions={[<a href='#'></a>]}><div style={{ color: "#566573" }}>Many cultural hubs offer free or discounted days so you can ponder Impressionism or dive into ancient Egypt on the cheap. Bank of America cardholders can also enjoy free general admission to more than 150 museums nationwide with the Museums on Us program.</div>
                        </Card>
                        <div class="dollardatetitle">Take a hike</div>
                        <Card className='large' header={<CardTitle image='/img/dollardate-page3-.jpg'></CardTitle>} actions={[<a href='#'></a>]}><div style={{ color: "#566573" }}>A day trip to the trails is a great way to enjoy beautiful landscapes, chat, and sneak in some exercise while you’re at it. Plus, a couple hours in nature can boost creativity and reduce cortisol levels. And there’s no need to seek out mountains—just a walk in the park, surrounded by greenery, has been shown to have similar health perks.</div>
                        </Card>
                        <div class="dollardatetitle">Go Picnic</div>
                        <Card className='large' header={<CardTitle image='/img/dollardate-page4-.jpg'></CardTitle>} actions={[<a href='#'>This is a Link</a>]}><div style={{ color: "#566573" }}>A day trip to the trails is a great way to enjoy beautiful landscapes, chat, and sneak in some exercise while you’re at it. Plus, a couple hours in nature can boost creativity and reduce cortisol levels. And there’s no need to seek out mountains—just a walk in the park, surrounded by greenery, has been shown to have similar health perks.</div>
                        </Card>
                    </div>
                </div>
                {/* Footer Start */}
                <div class="Footer">
                    Date Night 2018. All Rights Reserved.
                </div>
                {/* Footer End */}
            </div>
        )
    }
}

export default DollarDates
