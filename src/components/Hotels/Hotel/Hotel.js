import React from "react";
import styles from "./Hotel.module.css";

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
					</div>
				</div>
				</div>
			</div>
		</div>
		</div>
	);
		
}

	
export default Hotel;
