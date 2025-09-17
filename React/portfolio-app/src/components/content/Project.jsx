export function Project({ img, alt, title, description }) {

    return (
        <>
            <img className="project-img" src={img} alt={alt} />
            <div className="project-metadata">
                <h3 className="project-metadata-title">{title}</h3>
                <p>{description}</p>
            </div>
        </>
    );
}

export function Projects() {
    const projects = [
        {
            "img": "/images/projects/project1.webp",
            "alt": "project #1",
            "title": "Project #1",
            "description": "Clone Coding with HTML, CSS"
        },
        {
            "img": "/images/projects/project2.webp",
            "alt": "project #2",
            "title": "Project #2",
            "description": "Clone Coding with HTML, CSS"
        },
        {
            "img": "/images/projects/project3.webp",
            "alt": "project #3",
            "title": "Project #3",
            "description": "Clone Coding with HTML, CSS"
        },
        {
            "img": "/images/projects/project4.webp",
            "alt": "project #4",
            "title": "Project #4",
            "description": "Clone Coding with HTML, CSS"
        },
        {
            "img": "/images/projects/project5.webp",
            "alt": "project #5",
            "title": "Project #",
            "description": "Clone Coding with HTML, CSS"
        },
        {
            "img": "/images/projects/project6.webp",
            "alt": "project #6",
            "title": "Project #6",
            "description": "Clone Coding with HTML, CSS"
        },
        {
            "img": "/images/projects/project7.webp",
            "alt": "project #7",
            "title": "Project #7",
            "description": "Clone Coding with HTML, CSS"
        },
        {
            "img": "/images/projects/project8.webp",
            "alt": "project #8",
            "title": "Project #8",
            "description": "Clone Coding with HTML, CSS"
        }
    ]

    return (
        <ul class="projects">
            {projects && projects.map(project =>
                <li class="project">
                    <Project
                        img={project.img}
                        alt={project.alt}
                        title={project.title}
                        description={project.description}
                    />
                </li>
            )}
        </ul>
    );
}