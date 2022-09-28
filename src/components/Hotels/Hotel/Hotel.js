import React from "react";
import styles from "./Hotel.module.css";

function Hotel(props) {
	return (
		<div>
			<div className={styles.wrapper}>
				<div className={styles.wrapperbox}>
				<div className={`${styles.box}`}>{props.name}
				</div>
			</div>
		</div>
		</div>
	);
		
}

	
export default Hotel;
