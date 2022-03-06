import styles from './Menu.module.css';
import MenuItem from "./MenuItem";
import {useState} from "react";

export default function Menu({setSelection}) {

    const [choice, setChoice] = useState('');

    return (
        <div className={styles.menuBar}>
            <MenuItem title={"Profile"} clickAction={() => {
                setChoice('');
                setSelection('profile')
            }} />
            <MenuItem title={"Projects"} clickAction={() => {
                setChoice('center')
                setSelection('projects')
            }} />
            <MenuItem title={"Tools"} clickAction={() => {
                setChoice('right')
                setSelection('tools')
            }} />
            <div className={styles.selector + " " + styles[choice]} />
        </div>
    )
}
