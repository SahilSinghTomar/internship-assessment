import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Experience = ({ data }) => {
  const {name, title, timeline} = data;

  const [showWork, setShowWork] = useState(true);

  const handleWorkClick = () => {
    setShowWork(true);
  };

  const handleEducationClick = () => {
    setShowWork(false);
  };

  const text = `Hello there! My name is ${name}. I am a ${title}, and Im very passionate and dedicated to my work.`

  let education = timeline.filter(el => el.forEducation === true);
  let work = timeline.filter(el => el.forEducation === false);

  education = education.map(el => {
    return {
      start: el.startDate,
      end: el.endDate,
      jobProfile: el.jobTitle,
      location: el.jobLocation,
      company: el.company_name,
      word_done: el.bulletPoints,
    }
  })

  work = work.map(el => {
    return {
      start: el.startDate,
      end: el.endDate,
      jobProfile: el.jobTitle,
      location: el.jobLocation,
      company: el.company_name,
      word_done: el.bulletPoints,
    }
  })

  education.sort((a, b) => (a.start > b.start) ? 1 : -1)
  work.sort((a, b) => (a.start > b.start) ? 1 : -1)

  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  return (
    <section className="section experience-section bg-g">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-5">
            <div className="section-heading">
              <SectionHeading title="My Experience" subTitle="Experience" />
              <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">{text}</p>
              <div className="btn-bar" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                <a href={"/public/Resume.pdf"} className="px-btn dark" download>
                  Download my resume <Icon icon="bi-download" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 ps-xl-5">
            <button className={`btn-work ${showWork ? "activeBtn" : ""}`} onClick={handleWorkClick}>Work Experience</button>
            <button className={`btn-education ${showWork ? "" : "activeBtn"}`} onClick={handleEducationClick}>Education</button>
            <ul className={`resume-box ${showWork ? "" : "hidden"}`}>
              {work.map((element, index) => (
                <li key={index} data-aos="fade-up" data-aos-duration="800">
                  <div className="r-meta">
                    <span>{month[new Date(element.start).getMonth()]}, {new Date(element.start).getFullYear()} - {month[new Date(element.end).getMonth()]}, {new Date(element.end).getFullYear()}</span>
                    <label>-{element.jobProfile}</label>
                  </div>
                  <h5>{element.company}</h5>
                </li>
              ))}
            </ul>
            <ul className={`resume-box ${showWork ? "hidden" : ""}`}>
              {education.map((element, index) => (
                <li key={index} data-aos="fade-up" data-aos-duration="800">
                  <div className="r-meta">
                    <span>{month[new Date(element.start).getMonth()]}, {new Date(element.start).getFullYear()} - {month[new Date(element.end).getMonth()]}, {new Date(element.end).getFullYear()}</span>
                    <label>-{element.jobProfile}</label>
                  </div>
                  <h5>{element.company}</h5>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

Experience.propTypes = {
  data: PropTypes.object
}

export default Experience;
