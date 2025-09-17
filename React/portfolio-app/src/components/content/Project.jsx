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

export function Projects({projects}) {
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