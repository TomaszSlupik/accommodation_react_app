import "./App.scss";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Hotels from "./components/Hotels/Hotels";
import HotelDetails from "./components/Hotels/Hotel/Hotel";

function App() {
	return (
		<div className="App">
			<Header />
			<Menu />
			<Hotels />
			<HotelDetails />
		</div>
	);
}

export default App;
