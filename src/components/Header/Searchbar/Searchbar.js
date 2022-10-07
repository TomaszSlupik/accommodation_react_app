import React from "react";
import { useState } from "react";
import styles from "./Searchbar.module.css";
import PropTypes from "prop-types";
import ColorContext from "../../context/ColorContext";

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
		<ColorContext.Consumer>
		{
			({blue_color}) =>
			<div>
			<input
				value={term}
				onKeyDown={onKeyDownHandler}
				onChange={updateTerm}
				className={styles.input}
				type="text"
				placeholder="szukaj"
			/>
			<div className={styles.row}>
			<button className={styles.btn} onClick={search}>
				Szukaj
			</button>
			<ColorContext.Consumer>
			{
				({onChange}) =>
<div className={styles.brush} onClick={onChange}><i className={`fa-solid fa-brush`}></i></div>
			}
			
			</ColorContext.Consumer>
			
			</div>
		</div>
		}
		
		</ColorContext.Consumer>
		
	);
}

Searchbar.propTypes = propTypes;

export default Searchbar;
