import styles from './ProfileCard.module.css';
import profilePicture from '../../../assets/profile-pic.jpg';
import linkedin from '../../../assets/linkedin.svg';
import github from '../../../assets/github.svg';
import {useEffect, useRef} from "react";

export default function ProfileCard({setDone, done}) {
    const profile_card = useRef(null);
    useEffect(() => {
        profile_card.current.classList.add(styles.open);
    }, []);

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
