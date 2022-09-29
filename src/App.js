import "./App.scss";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Hotels from "./components/Hotels/Hotels";
import React, { Component } from "react";
import Hotel from "./components/Hotels/Hotel/Hotel";

class App extends Component {
	hotels = [
		{
			id: 1,
			name: "Lukulus",
			city: "Cypr",
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae facere, pariatur, maxime quod molestias itaque eligendi delectus optio dolore distinctio unde! Odit, ipsam? Iusto nam sapiente est facere velit.',
			mark: 9.2,
			image: "",
		},

		{
			id: 2,
			name: "Armanis",
			city: "Grecja",
			mark: 9,
			image: "",
		},

		{
			id: 3,
			name: "Nosal",
			mark: 9.5,
			city: "Grecja",
		},
		{
			id: 4,
			name: "Kaczkowski",
			mark: 8.8,
			city: "Grecja",
		},
		{
			id: 5,
			name: "Drenski",
			mark: 9.4,
			city: "Grecja",
		},
		{
			id: 6,
			name: "Warszawski",
			mark: 8.4,
			city: "Grecja",
		},
	];
	state = {
		hotels: this.hotels,
	};

	searchHandler(term) {
		console.log(`Szukaj z app`, term);
		const hotels = [...this.hotels]
		.filter((x) => x.name
		.toLowerCase()
		.includes(term.toLowerCase()));
		this.setState({ hotels });
	}

	render() {
		return (
			<div className="App">
				<Header onSearch={(term) => this.searchHandler(term)} />
				<Menu />
				<Hotels hotels={this.state.hotels} />
				<Hotel />
			</div>
		);
	}
}

export default App;
