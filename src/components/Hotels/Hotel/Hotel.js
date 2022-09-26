import React from "react";
import styles from "./Hotel.module.css";

function Hotel() {
	// const hotels = [
	// 	{
	// 		id: 1,
	// 		name: "Lukulus",
	// 		city: "Cypr",
	// 	},

	// 	{
	// 		id: 2,
	// 		name: "Armanis",
	// 		city: "Grecja",
	// 	},
	// ];

	// const hotelsList = hotels.map((el) => (
	// 	<Hotel key={el.id} {...el} />)

	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapperbox}>
				<div className={`${styles.box} ${styles.one}`}></div>
				<div className={`${styles.box} ${styles.two}`}>2 hotel</div>
				<div className={`${styles.box} ${styles.three}`}>3 hotel</div>
				<div className={`${styles.box} ${styles.four}`}>4 hotel</div>
				<div className={`${styles.box} ${styles.five}`}>5 hotel</div>
				<div className={`${styles.box} ${styles.six}`}>6 hotel</div>
			</div>
		</div>
	);
}

export default Hotel;
