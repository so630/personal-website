import ProjectCard from "./ProjectCard/ProjectCard";
import styles from './ProjectCard/ProjectCard.module.css';

export default function Projects() {
    let number = 200;
    let projects = [
        {
            title: 'Article Finder',
            link: 'https://still-wildwood-62331.herokuapp.com/',
            github: 'https://github.com/so630/Article-Finder',
            rotate: 0,
            src: '/book.png'
        },
        {
            title: 'Postman Clone',
            link: 'https://aqueous-woodland-14055.herokuapp.com/',
            github: 'https://github.com/so630/Postman-Clone',
            rotate: 0
        },
        {
            title: 'Bookmarks App',
            link: 'https://stark-basin-24533.herokuapp.com/',
            github: 'https://github.com/so630/Bookmarks',
            rotate: 0
        },
        {
            title: 'Recipe Book',
            link: 'https://teeny-tiny-peace.surge.sh/',
            github: 'https://github.com/so630/Recipe-Book',
            rotate: 0
        }
    ];

    return (
        <div className={styles.container}>
            {projects.map((project, index) => {
                setTimeout(() => {
                    document.getElementById('project-' + index).classList.add(styles.open);
                }, number);
                return <ProjectCard title={project.title} link={project.link} source={project.github} id={index} key={index}/>;
            })}
        </div>
    )
}
