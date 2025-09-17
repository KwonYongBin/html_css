import { AvatarImage } from "../base/Avatar";
import { Title, SubTitle } from "../base/Title";

const testimonialList = [
    {
        "img" : "/images/testimonials/people1.webp",
        "alt" : "testimonial-img",
        "desc" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi alias sequi eaque officiis deserunt delectus laboriosam veniam, optio expedita magni ad repellat officia unde, animi cupiditate ex! Quod, vero at!",
        "name" : "James Kim",
        "company" : "Google"
    },
    {
        "img" : "/images/testimonials/people2.webp",
        "alt" : "testimonial-img",
        "desc" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi alias sequi eaque officiis deserunt delectus laboriosam veniam, optio expedita magni ad repellat officia unde, animi cupiditate ex! Quod, vero at!",
        "name" : "James Kim",
        "company" : "Google"
    },
    {
        "img" : "/images/testimonials/people3.webp",
        "alt" : "testimonial-img",
        "desc" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi alias sequi eaque officiis deserunt delectus laboriosam veniam, optio expedita magni ad repellat officia unde, animi cupiditate ex! Quod, vero at!",
        "name" : "Anna Lee",
        "company" : "Google"
    },
]

export function Testimonials() {
    return (
        <section id="testimonial" class="section container">
            <Title title="Testimonial"/>
            <SubTitle title="See What they say about me"/>
            <ul class="testimonials">
                {testimonialList && testimonialList.map (item =>
                    <li class="testimonial">
                        <AvatarImage 
                            img={item.img}
                            msg={item.alt}
                            style="testimonial-img"
                        />
                        <div class="testimonial-text">
                            <p>{item.desc}</p>
                            <p><a href="#" class="testimonial-text-name">{item.name}</a> / {item.company}</p>                            
                        </div>
                    </li>
                )}
            </ul>
        </section>
    );
}