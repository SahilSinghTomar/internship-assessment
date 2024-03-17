import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import perser from 'html-react-parser';
import { Link as ScrollLink } from "react-scroll";


const Hero = ({ data }) => {
  const { name, title, avatar, phoneNumber, email, social_handles, address } = data;

   const backGroundStyle = {
    backgroundImage: `url(${avatar.url})`,
    WebkitMaskImage: 'radial-gradient(circle, black 45%, rgba(0, 0, 0, 0.5) 45%)',
    maskImage: 'radial-gradient(circle, black 45%, rgba(0, 0, 0, 0.5) 45%)',
  };

  // "title": "My name<br />is <b>Lilon</b> <span><br />Macwan...</span>",
  // "subTitle": "<span>Web Designer</span> based in <span>USA</span>",

  const myName = `My name<br />is <b>${name.split(" ")[0]}</b> <span><br />${name.split(" ")[1]}...</span>`;
  const myJob = `<span>${title}</span> based in <br/> <span>${address}</span>`;

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const heroElements = document.querySelector('.hb-me');
      if (heroElements) {
        heroElements.style.right = `${scrollValue * -0.25}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="home-section bg-dark">
      <div className="container">
        <div className="row  min-vh-100 align-items-center">
          <div className="col-lg-7 col-xl-7 col-xxl-6">
            <div className="hb-text">
              <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">{perser(myName)}</h1>
              <p className="lead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">{perser(myJob)}</p>
              <div className="btn-bar" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                <ScrollLink to="contact" spy={true} className="px-btn">
                  Work with ME
                  <Icon icon="bi:arrow-up-right" /></ScrollLink>
              </div>
              <div className="info-bar" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                <p><Icon icon="bi-phone" /><span>{phoneNumber}</span></p>
                <p><Icon icon="bi-envelope" /><span>{email}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hb-me" style={backGroundStyle} data-aos="fade-left" data-aos-duration="800" data-aos-delay="800"/>
      <div className="social-fix">
        <div className="social-links" >
          {
            social_handles.map((element, index) => (
              <a href={element.url} key={index} target="_blank" rel="noopener noreferrer">
                <Icon icon={`fa6-brands:${element.platform.toLowerCase()}`} />
              </a>
            ))
          }
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = {
  data: PropTypes.object
}

export default Hero;
