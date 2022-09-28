import React, {Component} from "react";
import Hotel from './Hotel/Hotel'

class Hotels extends Component {
	render() {
		return (
			<div>
				<h3>Oferta:</h3>
				{this.props.hotels.map (hotel =><Hotel key={hotel.id} {...hotel}/>)}
			</div>
		);
	}
}

export default Hotels;
