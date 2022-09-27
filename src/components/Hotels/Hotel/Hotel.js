import React from "react";
import styles from "./Hotel.module.css";

function Hotel(props) {
	return (
		<div>
			<div className={`${styles.box} ${styles.one}`}>
				<div className={styles.name}>{props.name}</div>
			</div>
		</div>
	);
}

const HotelDetails = () => {
	const hotels = [
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
		},
	];

	const hotelsList = hotels.map((el) => <Hotel key={el.id} {...el} />);

	return (
		<div>
			<div className={styles.wrapper}>
				<div className={styles.wrapperbox}>{hotelsList}</div>
			</div>
		</div>
	);
};
export default HotelDetails;
