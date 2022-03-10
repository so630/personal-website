import styles from './Tools.module.css';
import ToolCard from "./ToolCard/ToolCard";

export default function Tools() {

    let projects = [
        {
            title: 'React',
            src: '/logo512.png',
            category: 'front-end'
        },
        {
            title: 'Angular',
            src: '/angular.svg',
            category: 'front-end'
        },
        {
            title: 'HTML/CSS',
            src: '/html.png',
            category: 'front-end'
        },
        {
            title: 'NodeJS',
            src: '/nodejs.png',
            category: 'backend'
        },
        {
            title: 'MongoDB',
            src: '/mongodb.png',
            category: 'backend'
        },
        {
            title: 'EJS',
            src: '/ejs.png',
            category: 'backend'
        },
        {
            title: 'JavaScript',
            src: '/javascript.png',
            category: 'languages'
        },
        {
            title: 'Typescript',
            src: '/typescript.svg',
            category: 'languages'
        },
        {
            title: 'Python',
            src: '/python.png',
            category: 'languages'
        },
        {
            title: 'C++',
            src: '/c++.png',
            category: 'languages'
        },
        {
            title: 'C',
            src: '/c.png',
            category: 'languages'
        },
        {
            title: 'Java',
            src: '/java.png',
            category: 'languages'
        },
    ]

    return (
        <div className={styles.container}>
            {projects.map((project, i) => <ToolCard name={project.title} image={project.src} key={i} />)}
        </div>
    )
}
