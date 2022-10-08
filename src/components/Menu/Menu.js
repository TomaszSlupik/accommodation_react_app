import React, { useContext } from "react";
import styles from "./Menu.module.css"
import AuthContext from "../context/AuthContext";

function Menu() {
	const auth = useContext(AuthContext)

	const login = (e) =>{
		e.preventDefault()
		auth.login()
	}

	const logout = (e) =>  {
		e.preventDefault()
		auth.logout()
	}
	return (
		<div>
			<ul>
				<li className={styles.li}>
					<a href="#" className={styles.home}>Home</a>
					{auth.isAuthenticated 
					? <a href="#" className={styles.home} onClick={logout}>Wyloguj</a>
						:
						<a href="#" className={styles.home} onClick={login}>Zaloguj</a>
					}
					
				</li>
			</ul>
		</div>
	);
}

export default Menu;
