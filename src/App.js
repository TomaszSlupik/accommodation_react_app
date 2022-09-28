import "./App.scss";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Hotels from "./components/Hotels/Hotels";
import React, { Component } from "react";
import Hotel from "./components/Hotels/Hotel/Hotel";

class App extends Component {
	state = {
		hotels: [
			{
				name: "Lukulus",
				city: "Cypr",
				image: "",
			},

			{
				name: "Armanis",
				city: "Grecja",
				image: "",
			},

			{
				name: "Nosal",
				city: "Grecja",
			},
			{
				name: "Kaczkowski",
				city: "Grecja",
			},
			{
				name: "Drenski",
				city: "Grecja",
			},
			{
				name: "Warszawski",
				city: "Grecja",
			}
		],
	};

	render() {
		return (
			<div className="App">
				<Header />
				<Menu />
				<Hotels hotels={this.state.hotels}/>
				<Hotel />
			</div>
		);
	}
}

export default App;
