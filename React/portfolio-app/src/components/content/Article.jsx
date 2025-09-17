export function Article({ children, style }) {
    return (
        <article className={style}>
            {children}
        </article>
    );
}

export function SkillTitle({ title }) {
    return (
        <h3 className="skill-title">{title}</h3>
    );
}

/**
 * CodingSkill
 */

export function CodingSkill() {
    const skills = [
        {"title" : "Html", "value" : "98%", "width" : "98%"},
        {"title" : "Css", "value" : "90%", "width" : "90%"},
        {"title" : "JavaScript", "value" : "90%", "width" : "90%"},
        {"title" : "TypeScript", "value" : "85%", "width" : "95%"},
        {"title" : "React", "value" : "80%", "width" : "80%"},
        {"title" : "NodeJs", "value" : "68%", "width" : "68%"},
    ]

    return (
        <ul>
            {skills && skills.map(skill => 
            <li className="bar">
                <div className="bar-title"><span>{skill.title}</span><span>{skill.value}</span></div>
                <div className="bar-bg"><div className="bar-value" style={{width: skill.width}}></div></div>
            </li>
            )}
        </ul>
    );
}