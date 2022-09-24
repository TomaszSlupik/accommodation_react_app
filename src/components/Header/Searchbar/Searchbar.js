import React from "react";
import styles from "./Searchbar.module.css"

function Searchbar() {
	return (
		<div>
			<input className={styles.input} type="text" placeholder="szukaj" />
			<button className={styles.btn}>Szukaj</button>
       
		</div>
	);
}

export default Searchbar;
