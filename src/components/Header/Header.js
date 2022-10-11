import React from "react";
import Searchbar from "./Searchbar/Searchbar";
import styles from "./Header.module.css";
import withMousePosition from "../hoc/withMousePosition";

function Header(props) {

	const paralaxStyle = {
		transform:  `translate(${props.mouseX / 200 }px,
			${props.mouseY /20}px)`
		
	}

	return	( <header className={styles.header} >
		<Searchbar onSearch={props.onSearch} onClick={props.onChange}/>
				{/* <div  className={styles.headerImg} ></div> */}
				
				

	</header>
	)
}

export default withMousePosition(Header);
