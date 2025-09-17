import { AvatarImage } from "../base/Avatar";
import { Title, SubTitle } from "../base/Title";

export function Testimonials({data}) {
    return (
        <section id="testimonial" class="section container">
            <Title title="Testimonial"/>
            <SubTitle title="See What they say about me"/>
            <ul class="testimonials">
                {data.testimonialList && data.testimonialList.map (item =>
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