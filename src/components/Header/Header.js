import React from "react";
import Searchbar from "./Searchbar/Searchbar";
import styles from "./Header.module.css";

function Header(props) {
	return <header className={styles.header}>
		<div>
			<Searchbar onSearch={props.onSearch} />
		</div>
	</header>;
}

export default Header;
