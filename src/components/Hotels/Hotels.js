import React, {Component} from "react";
import Hotel from './Hotel/Hotel'
import PropTypes from "prop-types"

const propTypes = {
	hotels: PropTypes.array.isRequired
}

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

Hotels.propTypes = propTypes

export default Hotels;


