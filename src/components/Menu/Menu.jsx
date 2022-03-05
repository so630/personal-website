import styles from './Menu.module.css';
import MenuItem from "./MenuItem";
import {useState} from "react";

export default function Menu() {

    const [choice, setChoice] = useState('');

    return (
        <div className={styles.menuBar}>
            <MenuItem title={"Profile"} clickAction={() => setChoice('')} />
            <MenuItem title={"Projects"} clickAction={() => setChoice('center')} />
            <MenuItem title={"Tools"} clickAction={() => setChoice('right')} />
            <div className={styles.selector + " " + styles[choice]} />
        </div>
    )
}
