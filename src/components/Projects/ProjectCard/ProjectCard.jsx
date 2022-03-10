import styles from './ProjectCard.module.css';
import {useEffect, useRef} from "react";

export default function ProjectCard({title, link, source, id}) {

    const ref = useRef(null);

    return (
        <div className={`${styles.projectCard} ${styles.closed}`} id={"project-" + id} ref={ref}>
            <h1>{title}</h1>
            {link && <a href={link} target="_blank" className={styles.link}>link to website</a>}
            <a href={source} target="_blank" className={styles.source}>source code</a>
        </div>
    )
}
