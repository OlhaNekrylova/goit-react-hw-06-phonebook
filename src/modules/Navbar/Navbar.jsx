import { NavLink } from "react-router-dom";
import links from "../links";
import styles from "./Navbar.module.css";

const Navbar = ()=> {
    const elements = links.map(({id, text, link}) => 
        <li key={id}>
        <NavLink className={styles.link} to={link}>
            {text}
        </NavLink>
    </li>);

    return (
        <div className={styles.container}>
            <ul className={styles.menu}>
                {elements}
            </ul>
        </div>
    )
}

export default Navbar;

