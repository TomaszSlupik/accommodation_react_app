import "./App.scss";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Hotels from "./components/Hotels/Hotels";
import React, { Component } from "react";
import Loading from "./components/UI/Loading/Loading";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";

class App extends Component {
	hotels = [
		{
			id: 1,
			name: "Lukulus",
			city: "Cypr",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae facere, pariatur, maxime quod molestias itaque eligendi delectus optio dolore distinctio unde! Odit, ipsam? Iusto nam sapiente est facere velit.",
			mark: 9.2,
			image: "",
		},

		{
			id: 2,
			name: "Armanis",
			city: "Grecja",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae facere, pariatur, maxime quod molestias itaque eligendi delectus optio dolore distinctio unde! Odit, ipsam? Iusto nam sapiente est facere velit.",
			mark: 9,
			image: "",
		},

		{
			id: 3,
			name: "Nosal",
			city: "Grecja",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae facere, pariatur, maxime quod molestias itaque eligendi delectus optio dolore distinctio unde! Odit, ipsam? Iusto nam sapiente est facere velit.",
			mark: 9.5,
			image: "",
		},
		{
			id: 4,
			name: "Kaczkowski",
			city: "Grecja",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae facere, pariatur, maxime quod molestias itaque eligendi delectus optio dolore distinctio unde! Odit, ipsam? Iusto nam sapiente est facere velit.",
			mark: 8.8,
			image: "",
		},
		{
			id: 5,
			name: "Drenski",
			city: "Grecja",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae facere, pariatur, maxime quod molestias itaque eligendi delectus optio dolore distinctio unde! Odit, ipsam? Iusto nam sapiente est facere velit.",
			mark: 9.4,
			image: "",
		},
		{
			id: 6,
			name: "Warszawski",
			city: "Grecja",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae facere, pariatur, maxime quod molestias itaque eligendi delectus optio dolore distinctio unde! Odit, ipsam? Iusto nam sapiente est facere velit.",
			mark: 8.4,
			image: "",
		},
	];
	state = {
		hotels: [],
		loading: true,
		blue_color: 'primary'
	};

	searchHandler(term) {
		console.log(`Szukaj z app`, term);
		const hotels = [...this.hotels].filter((x) =>
			x.name.toLowerCase().includes(term.toLowerCase())
		);
		this.setState({ hotels });
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ hotels: this.hotels });
			this.setState({ loading: false });
		}, 1000);
		console.log(`Konstruktor zamontowany`);
	}

	changeColor = () => {
		const danger_color = this.state.blue_color === 'primary' ? 'danger' : 'primary'
		this.setState ({blue_color : danger_color})
		console.log(`test`)
	}

	render() {
		console.log(`Komponent wyrenderowany`);
		return (
			<div className="App">
				<Layout 
				header={<Header onSearch={(term) => this.searchHandler(term)} blue_color={this.state.blue_color}/>}
				menu={<Menu blue_color={this.state.blue_color}/>}
				content={this.state.loading ? (
					<Loading blue_color={this.state.blue_color} onChange={this.changeColor}/>
				) : (
					<Hotels hotels={this.state.hotels} blue_color={this.state.blue_color}/>
				)}
				footer={<Footer blue_color={this.state.blue_color}/>}
				/>
			</div>
		);
	}
}

export default App;
