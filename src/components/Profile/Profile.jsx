import ProfileCard from "./ProfileCard/ProfileCard";
import styles from "./ProfileCard/ProfileCard.module.css";
import ProfileDescription from "./ProfileDescription/ProfileDescription";

export default function Profile({setDone, done}) {
    return (
        <div id="profile" style={{marginRight: 'auto', marginLeft: 'auto', textAlign: 'center', marginTop: '100px'}}>
            <div className={styles.profileSection}>
                <ProfileCard setDone={setDone} done={done} />
                <ProfileDescription setDone={setDone} done={done} />
            </div>
        </div>
    )
}
