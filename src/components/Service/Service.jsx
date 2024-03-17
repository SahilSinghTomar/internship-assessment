import PropTypes from 'prop-types';
import SectionHeading from '../SectionHeading/SectionHeading';
import numberToWords from "number-to-words";

const Service = ({ data }) => {

  const services = data.map((el, idx) => {
    const triger = numberToWords.toWords(idx+1)
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt at nulla doloribus cum hic minima eveniet totam id quasi magni sed rerum excepturi unde assumenda quisquam, pariatur soluta similique? Fugit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quam praesentium quas obcaecati? Id amet esse alias voluptas a totam ut soluta, quo quae delectus dicta! Et corporis laboriosam atque."
    return {...el, triger: triger.charAt(0).toUpperCase() + triger.slice(1),
                text}
  })

  return (
    <section id="services" className="section services-section bg-dark">
      <div className="container">
        <SectionHeading title="My Specialties" subTitle="My Service" />
        <div className="accordion accordion-flush" id="accordion_services">
          {services.map((element, index) => (
            <div
              className="accordion-item"
              key={index}
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="accordion-header">
                <button
                  className={`accordion-button ${
                    element.triger !== 'One' ? 'collapsed' : ''
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${element.triger}`}
                  aria-expanded={`${element.triger ? 'true' : 'false'}`}
                  aria-controls={`${element.triger}`}
                >
                  <span className="services-title">{element.name}</span>
                  <span className="services-small-desc">{element.desc}</span>
                  <span className="accordion-icon" />
                </button>
              </div>
              <div
                id={`${element.triger}`}
                className={`accordion-collapse collapse ${
                  element.triger === 'One' ? 'show' : ''
                }`}
                data-bs-parent="#accordion_services"
              >
                <div className="accordion-body">
                  <div className="row gy-4">
                    <div className="col-sm-6 col-md-4">
                      <div className="s-img">
                        <img
                          src={element.image.url}
                          title=""
                          alt="Service Image"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-8">
                      <h3>{element.name}</h3>
                      <div className="s-text">{element.text}</div>
                      <button className='btn-charge'>{element.charge}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Service.propTypes = {
  data: PropTypes.array,
};

export default Service;
