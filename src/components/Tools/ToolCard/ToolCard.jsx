import styles from '../Tools.module.css';
import {useEffect, useRef} from "react";

export default function ToolCard({name, image}) {
    const ref = useRef(null);

    useEffect(() => {
        ref.current.classList.add(styles.open);
    })

    return (
        <div className={styles.toolCard + " " + styles.closed} ref={ref}>
            <img src={image} alt=""/>
            <h1>{name}</h1>
        </div>
    )
}
