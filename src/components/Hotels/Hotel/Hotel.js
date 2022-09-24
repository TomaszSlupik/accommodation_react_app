import React from "react";
import styles from "./Hotel.module.css";


function Hotel() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapperbox}>
				<div className={`${styles.box} ${styles.one}`}>
					1 hotel
				</div>
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
