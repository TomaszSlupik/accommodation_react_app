import React from "react";
import styles from "./Menu.module.css"

function Menu() {
	return (
		<div>
			<ul>
				<li className={styles.li}>
					<a href="#" className={styles.home}>Home</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
