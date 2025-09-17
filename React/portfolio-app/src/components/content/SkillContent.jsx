import { List } from "../base/List.jsx";
import { Article, SkillTitle, CodingSkill } from "./Article.jsx";

export function SkillContent() {
    const tools = [
        "Visual Studio Code",
        "IntelliJ",
        "Android Studio",
        "Eclipse",
        "MySQL Workbench"
    ];
    const etc = [
        "Git", "Scrum Master", "SVN"
    ];
    return (
        <div className="skills">
            <Article style="skills-coding">
                <SkillTitle title="Coding Skills" />
                <CodingSkill />
            </ Article>

            <Article style="skills-tools">
                <SkillTitle title="Tools" />
                <List titles={tools} />
            </Article>

            <Article style="skills-etc">
                <SkillTitle title="Etc" />
                <List titles={etc} />
            </Article>
        </div>
    );
}