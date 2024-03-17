import SectionHeading from "../SectionHeading/SectionHeading";
import Carousel from "../Carousel/Carousel";
import PropTypes from 'prop-types';

const Testimonial = ({ data, testimonialSettings }) => {

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

Testimonial.propTypes = {
  data: PropTypes.array.isRequired,
  testimonialSettings: PropTypes.object.isRequired,
  brandSettings: PropTypes.object.isRequired,
};

export default Testimonial
