import "./App.scss";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Hotels from "./components/Hotels/Hotels";
import { useEffect } from "react";
import Loading from "./components/UI/Loading/Loading";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import ColorContext from "./components/context/ColorContext";
import AuthContext from "./components/context/AuthContext";
import { useState } from "react";

const backendHotels = [
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





function App () {

	const [hotels, setHotels] = useState([])
	const [loading, setLoading] = useState(true)
	const [blue_color, setBlue_Color] = useState('primary')
	const [isAuthenticated, setIsAuthenticated] = useState(false)

	



	const changeColor = () => {
		const warning_color = blue_color === 'primary' ? 'warning' : 'primary';
		setBlue_Color (warning_color)
	}

	const searchHandler = (term) => {
		console.log(`Szukaj z app`, term);
		const newHotels = [...backendHotels].filter((x) =>
			x.name.toLowerCase().includes(term.toLowerCase())
		);
		setHotels(newHotels);
	}

	useEffect(()=>{
		setTimeout(() => {
			setHotels(backendHotels);
			setLoading(false)
			
		}, 1000);

	}, [])

	return (

		<AuthContext.Provider value={{isAuthenticated: isAuthenticated,
			login: ()=> setIsAuthenticated(true),
			logout: ()=> setIsAuthenticated(false),
		
		}}
			>
			<ColorContext.Provider value={{
				blue_color: blue_color,
				onChange: changeColor}}>

			<div className="App">
				<Layout 
				header={<Header onSearch={(term) => searchHandler(term)} blue_color={blue_color}
				onChange={changeColor}
				
			 />
			
				}
				
				menu={<Menu blue_color={blue_color}/>}
				content={loading ? (
					<Loading blue_color={blue_color} />
				) : (
					<Hotels hotels={hotels} blue_color={blue_color}/>
				)}
				footer={<Footer blue_color={blue_color}/>}
				/>
			</div>
			</ColorContext.Provider>
			</AuthContext.Provider>

	)
}

export default App;
