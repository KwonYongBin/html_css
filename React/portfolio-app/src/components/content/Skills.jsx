import { Description, SubTitle, Title } from "../base/Title.jsx";
import { SkillContent } from "./SkillContent.jsx";

export function Skills({data}) {
    return (
        <section id="skill" class="section container">
            <Title title="My Skills" />
            <SubTitle title="Skills & Attributes"/>
            <Description style=""/>
            <SkillContent 
                skills={data.skills}
                tools={data.tools} 
                etc={data.etc}
            />
        </section>
    );
}