import PropTypes from 'prop-types';
import SectionHeading from '../SectionHeading/SectionHeading';
import perser from 'html-react-parser';
import { Icon } from '@iconify/react';

const About = ({ data }) => {
  const {name, title, phoneNumber: phone, email, address, exp_year, some_total, subTitle, description,
        quote, avatar} = data;

  const myJob = `<span>${title}</span> based in <br/> <span>${address}</span>`;

  const contactInfo = [
      {
        "icon": "phone",
        "data": phone
      },
      {
        "icon": "person",
        "data": name
      },
      {
        "icon": "envelope",
        "data": email
      },
      {
        "icon": "map",
        "data": address
      }
  ]

  const archivement = [
        {
          "number": `${exp_year}+`,
          "meta": "Years <br /> experience...",
          "text": `Hello there! My name is <span>${name}</span>. I am a ${title}, and Im very passionate and dedicated to my work.`
        },
        {
          "number": `${some_total}+`,
          "meta": "Clients <br /> Worldwide...",
          "text": description
        }
      ]

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionHeading title="WELCOME TO..." subTitle="Nice to meet you!" />
        <div
          className="row gy-4"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
        >
          <div className="col-lg-5">
            <div className="about-left">
              <div className="about-avatar">
                <img src={`${avatar.url}`} alt="Thumb" />
              </div>
              <h3>{name}</h3>
              <p>{perser(myJob)}</p>
              <div className="btn-bar">
                <a className="px-btn" href={"/public/Resume.pdf"} download>
                  Download CV <Icon icon="bi-download" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 ps-xl-5">
            <div className="about-bio">
              <p>{subTitle}</p>
            </div>
            <div className="about-contact row gx-lg-5">
              {contactInfo.map((element, index) => (
                <div className="col-sm-6" key={index}>
                  <p>
                    <Icon icon={`bi:${element.icon}`} />{' '}
                    <span>{element.data}</span>
                  </p>
                </div>
              ))}
            </div>
            <div className="about-exp">
              <div className="row gy-4">
                {archivement.map((element, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="a-number">
                      <h6>{element.number}</h6>
                      <span>{perser(element.meta)}</span>
                    </div>
                    <p className="lead">{perser(element.text)}</p>
                  </div>
                ))}
              </div>
              <blockquote>
                <Icon icon="fa6-solid:quote-left" />
                <p>{quote}</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  data: PropTypes.object,
};

export default About;
