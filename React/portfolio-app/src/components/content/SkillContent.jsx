import { List } from "../base/List.jsx";
import { Article, SkillTitle, CodingSkill } from "./Article.jsx";

export function SkillContent({skills, tools, etc}) {
    return (
        <div className="skills">
            <Article style="skills-coding">
                <SkillTitle title="Coding Skills" />
                <CodingSkill skills={skills}/>
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