import { Title, SubTitle } from "../base/Title.jsx";
import { Categories } from "./Categories.jsx";
import { Projects } from "./Project.jsx";

export function Work({data}) {
    return (
        <section id="work" className="section container">
            <Title title="My Work"/>
            <SubTitle title="Projects" />
            <Categories categories={data.categories} />
            <Projects projects={data.projects} />
        </section>
    )
}