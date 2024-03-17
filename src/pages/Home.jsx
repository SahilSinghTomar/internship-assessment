import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";
import Service from "../components/Service/Service";
import Testimonial from "../components/Testimonial/Testimonial";
import Skills from "../components/Skills/Skills"
import data from "../data.json";
import PropTypes from 'prop-types';

const testimonialSettings = data.sliderData.testimonialInfo.settings;
const brandSettings = data.sliderData.brandInfo.settings;

const Home = ({ user }) => {
  const { blogData, contactData } = data;

  const heroData = {...user.about, email: user.email, social_handles: user.social_handles};
  const aboutData = {...user.about, email:user.email};
  const experienceData = {...user.about, timeline: user.timeline};
  const portfolioData = user.projects;
  const serviceData = user.services;
  const sliderData = user.testimonials;
  const skillsData = user.skills;
  const footerData = {...user.about }

  return (
    <>
      <main className="wrapper">
        <Hero data={heroData} />
        <About data={aboutData} />
        {user.timeline && <Experience data={experienceData} />}
        {user.services && <Service data={serviceData} />}
        {user.projects && <Portfolio data={portfolioData} />}
        {user.skills && <Skills data={skillsData} />}
        <Testimonial data={sliderData}
          testimonialSettings={testimonialSettings}
          brandSettings={brandSettings} />
        {user.blogs && <Blog data={blogData} />}
        <Contact data={contactData} />
        <Footer data={footerData} />
      </main>
    </>
  )
}

Home.propTypes = {
  user: PropTypes.object.isRequired
}

export default Home;
