import React, { Component } from "react";
import { Button, Table, Col, Card, CardTitle, MediaBox, Row, CardPanel, Dropdown, NavItem, Input } from "react-materialize";
import "./Spinner.css";

class Spinner extends Component {

	constructor(props) {
		super(props);
		this.state = {
			zipcode: '',
			wheelDate: "",
			degree: 1800,
			click: 1,
			totalDegree: 0,
			data: [{}],
			haveAllUserData: false
		}
	}

	spinAction = () => {
		if (this.state.zipcode.length === 5) {

			const click = this.state.click + 1;
			let wheelDate = '';

			const newDegree = this.state.degree * this.state.click;
			const extraDegree = Math.floor(Math.random() * 360) + 1;
			const totalDegree = newDegree + extraDegree;

			switch (true) {
				case extraDegree >= 270 && extraDegree < 330:
					wheelDate = 'zoo';
					break;
				case extraDegree >= 30 && extraDegree < 90:
					wheelDate = 'archery';
					break;
				case extraDegree >= 90 && extraDegree < 150:
					wheelDate = 'bar';
					break;
				case extraDegree >= 150 && extraDegree < 210:
					wheelDate = 'concert';
					break;
				case extraDegree >= 210 && extraDegree < 270:
					wheelDate = 'karaoke';
					break;
				default:
					wheelDate = 'museum';
			}

			this.setState({
				click,
				totalDegree,
				wheelDate
			})
			this.props.setWheelDate(wheelDate);
			this.setState({ haveAllUserData:true})

		}
	}


	handleUserSelection(type, selection) {
		console.log("selection", selection)
		this.setState({
			[type]: selection
		}, () => {
			this.haveAllUserData();
		})
	}

	haveAllUserData() {
		if (this.state.wheelDate.length > 0 && this.state.zipcode.length === 5 && this.state) {
			this.setState({ haveAllUserData: true });
		} else {
			this.setState({ haveAllUserData: false })
		}
	}

	returnYelp(yelpData) {
		this.setState({
			data: yelpData
		})
	}

	getYelpData() {
		fetch('/api/wheelSearch', {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'post',
			body: JSON.stringify({
				wheelDate: this.state.wheelDate,
				zipcode: this.state.zipcode,
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
			if (data.message === 'mail sent') {
				this.setState({
					sendSuccessful: true,
					sendFailure: false,
					email: '',
					subject: '',
					body: '',
					isSent: true,
					isSending: false,
					emailValid: false
				});
			}
		});
	}

	render() {
		console.log(this.state.wheelDate, this.state.zipcode, this.state.haveAllUserData, this.state.click)
		return (
			<div className="Spinner">
				<Row id='zipcode-wrapper'><Col className='offset-s5' s={4}>
					<Input name='zipcode' label='Enter Zip Code' className="zipcode" value={this.state.zipcode} onChange={(event) => { this.handleUserSelection('zipcode', event.target.value) }} />
				</Col></Row>
				<Row><Col className='offset-s5' s={4}>
					<div id="wrapper">
						<div id="wheel">
							<div id="inner-wheel" style={{ 'transform': `rotate(${this.state.totalDegree}deg)` }}>
								<div className="sec"><span className="fa"><i className="medium material-icons">pets</i></span></div>
								<div className="sec"><span className="fa"><i className="medium material-icons">mic</i></span></div>
								<div className="sec"><span className="fa"><i className="medium material-icons">music_note</i></span></div>
								<div className="sec"><span className="fa"><i className="medium material-icons">local_bar</i></span></div>
								<div className="sec"><span className="fa"><i className="medium material-icons">album</i></span></div>
								<div className="sec"><span className="fa"><i className="medium material-icons">brush</i></span></div>
							</div>
							<div id="spin" onClick={this.spinAction}>
								<div id="inner-spin"></div>
							</div>
							<div id="shine"></div>
						</div>

					</div>
				</Col></Row>
				<Row><Col className='offset-s5' s={4}>
					<Button className="venue-button-container" disabled={!this.state.haveAllUserData} onClick={this.getYelpData.bind(this)} >Find Venues Near You!</Button>
				</Col></Row>
				<Row className='result-container'>
				{this.state.data.map((businesses, i)=>(
				<div class="col s6 m2">
					<div  hidden={!this.state.haveAllUserData} class="card small">
						<div class="card-image">
							<img class='card-img' src={businesses.image_url} />
						</div>
						<div class="card-content">
							<p>{businesses.name}</p>
							<p>{businesses.display_phone}</p>
						</div>
					</div>
				</div>
				))}
				</Row>
				</div>
			)
		}
	}
	
	
	export default Spinner;
	// 	{this.state.data.map((businesses, i)=>(
	// 	<Card>
	// 	<div className='wheel-date-result' key={i}>
	// 		{businesses.name}
	// 	</div>
	// 	<div className='wheel-date-result' key={i}>
	// 		{businesses.rating}
	// 	</div>
	// 	</Card>
	// ))}