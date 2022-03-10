import styles from './ProfileDescription.module.css';
import {useEffect, useRef} from "react";

export default function ProfileDescription() {
    const [ref1, ref2, ref3, ref4, ref5] = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]
    useEffect(() => {
        setTimeout(() => {
            ref1.current.classList.add(styles.openRight)
            setTimeout(() => {
                ref2.current.classList.add(styles.openRight);
                setTimeout(() => {
                    ref3.current.classList.add(styles.openBottom)
                    setTimeout(() => {
                        ref4.current.classList.add(styles.openRight);
                    }, 400)
                }, 500);
            }, 400);
        }, 400);
    }, [ref1, ref2, ref3, ref4])

    return (
        <div className={styles.profileDescription}>
            <h1 className={styles.closeRight} ref={ref1}>Hello</h1>
            <h3 ref={ref2} className={styles.closeRight}>Here is who I am and what I do</h3>
            <a ref={ref3} className={styles.closeBottom} target="_blank" href="https://github.com/so630?tab=repositories">My Projects</a>
            <p ref={ref4} className={styles.closeRight}>I am a full stack web and mobile app developer currently studying in year 10 at high school. I am also into game programming as a hobby.</p>
        </div>
    )
}
