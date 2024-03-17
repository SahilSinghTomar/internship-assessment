import PropTypes from 'prop-types';
import SectionHeading from '../SectionHeading/SectionHeading';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import { Icon } from '@iconify/react';

const Portfolio = ({ data }) => {
  // Modal
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);

  console.log(data)

  let paragraphList = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]

  const getData = (imgLink, title, paragraphList) => {
    console.log(imgLink, title, paragraphList);
    let tempData = [imgLink, title, paragraphList];
    setTempData(() => [1, ...tempData]);
    setModal(true);
  }

  const modalClose = () => {
    setModal(false);
  }

  const projects = data.projects;
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
                    <div className="work-img" onClick={() => getData(element.image.url, element.title, paragraphList)}>
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
      {modal === true ? <Modal social_handles={data.social_handles} img={tempData[1]} title={tempData[2]} paraList={tempData[3]} modalClose={modalClose} /> : ""}
    </section>
  )
}

Portfolio.propTypes = {
  data: PropTypes.array
}


export default Portfolio;
