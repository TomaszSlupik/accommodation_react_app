import React from "react";
import { useState } from "react";
import styles from "./Searchbar.module.css";

function Searchbar() {
	const [term, setTerm] = useState("");

	const search = () => {
		console.log(`szukaj`, term);
	};

	const updateTerm = (e) => {
		setTerm(e.target.value);
	};

	const onKeyDownHandler = (e) => {
		if (e.key === "Enter") {
			search();
		}
	};

	return (
		<div>
			<input
				value={term}
				onKeyDown={onKeyDownHandler}
				onChange={updateTerm}
				className={styles.input}
				type="text"
				placeholder="szukaj"
			/>
			<button className={styles.btn} onClick={search}>
				Szukaj
			</button>
		</div>
	);
}

export default Searchbar;
