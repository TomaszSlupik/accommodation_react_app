import React from "react";
import styles from "./Hotel.module.css";
import PropTypes from "prop-types";

const propTypes = {
	name: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
	description: PropTypes.string,
	mark: PropTypes.number.isRequired
}	

function Hotel(props) {
	return (
		<div>
			<div className={styles.wrapper}>
				<div className={styles.wrapperbox}>
				<div className={`${styles.box} ${styles.name}`}>{props.name}
				<div className={styles.boxfirst}>
					<div className={styles.img}></div>
					<div className="boxsecond">
						<div className={styles.city}><b>Miejsce:</b> {props.city}</div>
						<div className={styles.mark}><b>Ocena:</b> {props.mark}</div>
					 	<div className={styles.description}><b>Opis: </b>{props.description}</div>
						 <button type="button" className={`${styles.btn} btn btn-${props.blue_color}`}>Otwórz</button>
					</div>
				</div>
				</div>
			</div>
		</div>
		</div>
	);
		
}


Hotel.propTypes = propTypes

export default Hotel;
