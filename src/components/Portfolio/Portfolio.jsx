import PropTypes from 'prop-types';
import SectionHeading from '../SectionHeading/SectionHeading';
import { Icon } from '@iconify/react';

const Portfolio = ({ data }) => {
  const projects = data.map(el => el)
  projects.sort((a, b) => (a.sequence > b.sequence) ? 1 : -1)

  return (
    <section>
      <div id="work" className="section work-section">
        <div className="container">
          <SectionHeading title="RECENT PROJECT" subTitle="My Work" />
          <div className="row gy-5 lightbox-gallery" data-aos="fade-up" data-aos-duration="800">
            {
              projects.map((element, index) => (
                <div className="col-lg-6" key={index}>
                  <div className="work-box">
                    <div className="work-img" >
                      <img src={element.image.url} title="" alt="portfolio image" />
                    </div>
                    <div className="work-text">
                      <h4>{element.title}</h4>
                      <ul className='tags'>
                        {element.techStack.map(el => {
                          return <li className='tag' key={el}>{el}</li>
                        })}
                      </ul>
                      <div className="btn-bar">
                        <a className="gallery-link" href="https://github.com/SahilSinghTomar" target='_blank' rel="noreferrer">
                          <Icon icon="bi:github" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

Portfolio.propTypes = {
  data: PropTypes.array
}


export default Portfolio;
