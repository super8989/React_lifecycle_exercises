import React, { Component } from "react";
import axios from "axios";
import "./ZenQuote.css";

class ZenQuote extends Component {
	constructor(props) {
		super(props);
		this.state = { quote: "" };
	}

	componentDidMount() {
		//load data
		axios.get("https://api.github.com/zen").then(response => {
			setTimeout(
				function() {
					this.setState({ quote: response.data });
				}.bind(this),
				2000
			);
		});
		//set state with that data
	}

	render() {
		return (
			<div>
				<div className='loader'></div>
				<h1> Always remember...</h1>
				<p>{this.state.quote}</p>
			</div>
		);
	}
}

export default ZenQuote;
