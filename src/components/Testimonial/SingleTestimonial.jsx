import PropTypes from 'prop-types';

const Singletestimonial = ({ element }) => {
  // console.log(element)

  return (
    <div className="testimonials-box">
      <div className="testimonial-content">
          <div className="t-avatar">
            <img className='t-image' src={element.image.url} title="" alt="" />
          </div>
          <div className="t-text">
            <p>“{element.review}”</p>
            <div className="t-lead">
              <h6>- {element.name}</h6>
              <span>{element.position}</span>
            </div>
          </div>
      </div>
    </div>
  )
}

Singletestimonial.propTypes = {
  element: PropTypes.object
}

export default Singletestimonial
