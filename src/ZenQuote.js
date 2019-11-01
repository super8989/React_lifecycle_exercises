import React, { Component } from "react";
import axios from "axios";
import "./ZenQuote.css";

class ZenQuote extends Component {
	constructor(props) {
		console.log("inside constructor");
		super(props);
		this.state = { quote: "", isLoaded: false };
	}

	componentDidMount() {
		console.log("inside component did mount");
		//load data
		axios.get("https://api.github.com/zen").then(response => {
			setTimeout(
				function() {
					this.setState({ quote: response.data, isLoaded: true });
				}.bind(this),
				2000
			);
		});
		//set state with that data
	}

	componentDidUpdate() {
		console.log("inside component did update");
	}

	render() {
		console.log("inside render");
		return (
			<div>
				{this.state.isLoaded ? (
					<div>
						<h1> Always remember...</h1>
						<p>{this.state.quote}</p>
					</div>
				) : (
					<div className='loader'></div>
				)}
			</div>
		);
	}
}

export default ZenQuote;
