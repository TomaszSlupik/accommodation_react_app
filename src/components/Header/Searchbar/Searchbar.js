import React from "react";
import { useState } from "react";
import styles from "./Searchbar.module.css";
import PropTypes from "prop-types";

const propTypes = {
	onSearch: PropTypes.func.isRequired
}

function Searchbar(props) {
	const [term, setTerm] = useState("");

	const search = () => {
		// console.log(`szukaj`, term);
		props.onSearch(term);
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

Searchbar.propTypes = propTypes;

export default Searchbar;
