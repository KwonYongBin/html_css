import { Article, SkillTitle, CodingSkill } from "./Article.jsx";

export function SkillContent() {
    return (
        <div className="skills">
            <Article style="skills-coding">
                <SkillTitle title="Coding Skills" />
                <CodingSkill />
            </ Article>

            <Article style="skills-tools">
                <SkillTitle title="Tools" />
                <ul>
                    <li>Visual Studio Code</li>
                    <li>IntelliJ</li>
                    <li>Android Studio</li>
                    <li>Eclipse</li>
                    <li>MySQL Workbench</li>
                </ul>
            </Article>

            <Article style="skills-etc">
                <SkillTitle title="Etc" />
                <ul>
                    <li>Git</li>
                    <li>Scrum Master</li>
                    <li>SVN</li>
                </ul>
            </Article>
        </div>
    );
}