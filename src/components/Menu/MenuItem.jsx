import styles from './Menu.module.css';

export default function MenuItem({title, clickAction}) {
    return (
        <div className={styles.menuItem} onClick={clickAction}>
            <h1 className={styles.menuItemTitle}>{title}</h1>
        </div>
    )
}
