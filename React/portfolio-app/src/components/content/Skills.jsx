import { Description, SubTitle, Title } from "../base/Title.jsx";
import { SkillContent } from "./SkillContent.jsx";

export function Skills() {
    return (
        <section id="skill" class="section container">
            <Title title="My Skills" />
            <SubTitle title="Skills & Attributes"/>
            <Description style=""/>
            <SkillContent />
        </section>
    );
}