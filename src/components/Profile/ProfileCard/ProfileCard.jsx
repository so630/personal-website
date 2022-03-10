import styles from './ProfileCard.module.css';
import profilePicture from '../../../assets/profile-pic.jpg';
import linkedin from '../../../assets/linkedin.svg';
import github from '../../../assets/github.svg';
import {useEffect, useRef, useState} from "react";

export default function ProfileCard({setDone, done}) {
    const profile_card = useRef(null);
    useEffect(() => {
        profile_card.current.classList.add(styles.open);
    }, []);

    let messages = ['FULL STACK DEVELOPER', 'MOBILE DEVELOPER', 'COMPETITIVE PROGRAMMER', 'PROGRAMMER'];

    let [index, setIndex] = useState(0);
    let [subIndex, setSubIndex] = useState(0);
    let [blink, setBlink] = useState(true);
    let [reverse, setReverse] = useState(false);

    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink])

    useEffect(() => {
        if (subIndex === messages[index].length + 1 && index !== messages.length - 1 && !reverse) {
            setTimeout(() => setReverse(true), 1000)
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => prev + 1);
            return;
        }
        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, 100);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    return (
        <div className={`${styles.profileCard} ${!done ? styles.closed : ''}`} ref={profile_card}>
            <img src={profilePicture} alt="profile picture"/>
            <h1>Soham Chakraborty</h1>
            <hr/>
            <h3>FULL STACK DEVELOPER</h3>
            <div className={styles.footer}>
                <a target="_blank" href="https://www.linkedin.com/in/soham-chakraborty-0716b7226"><img src={linkedin} className={styles.socials} alt="socials"/></a>
                <a target="_blank" href="https://www.github.com/so630"><img src={github} className={styles.socials} alt="socials"/></a>
            </div>
        </div>
    )
}
