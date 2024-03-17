import Slider from 'react-slick';
import Singletestimonial from '../Testimonial/SingleTestimonial';
import "slick-carousel/slick/slick.css";
import Brand from '../Brand/Brand';



const Carousel = ({ useFor, data, settings }) => {

  if (useFor === "testimonials") {
    return (
      <Slider {...settings}>
        {
          data.map((element, index) => (
            <Singletestimonial element={element} key={index} />
          ))
        }
      </Slider>
    )
  } else if (useFor === "brand") {
    return (
      <Slider {...settings}>
        {
          data.map((element, index) => (
            <Brand key={index} brandLogo={element.imgLink} />
          ))
        }
      </Slider>
    )
  }
}

export default Carousel
