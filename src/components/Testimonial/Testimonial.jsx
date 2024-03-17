import SectionHeading from "../SectionHeading/SectionHeading";
import Carousel from "../Carousel/Carousel";

const Testimonial = ({data, testimonialSettings, brandSettings}) => {

  return (
    <section id="testimonials" className="section testimonials-section bg-g">
      <div className="container">
        <SectionHeading title="What they says" subTitle="Testimonial" />
        <div className="testimonials">
          <Carousel useFor={"testimonials"} data={data} settings={testimonialSettings} />
        </div>
      </div>
    </section >
  )
}

export default Testimonial
