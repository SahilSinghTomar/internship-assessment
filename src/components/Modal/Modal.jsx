import PropTypes from 'prop-types';
import { Icon } from "@iconify/react";

const Modal = ({ img, title, paraList, social_handles, modalClose }) => {
  const modalStyle = {
    backgroundColor: 'rgba(0,0,0,.6)',
    backdropFilter: "saturate(180%) blur(8px)",
    display: "block"
  };

  return (
    <div className="modal show fade bd-example-modal-lg" style={modalStyle}>
      <div className="px-modal">
        <button className="position-absolute top-0 end-0 text-white border-0 bg-transparent" onClick={modalClose}> <Icon icon="ic:round-close" /></button>
        <div className="single-blog-box">
          <div className="single-blog-img">
            <img src={img} title="" alt="" />
          </div>
          <div className="single-blog-content">
            <h2>{title}</h2>
            {paraList && paraList.map((element, index) => (
              <p key={index}>{element}</p>
            ))
            }
            <div className="blog-meta">
              <label>Share</label>
              <ul className="nav social-link">
                {social_handles.map((element, index) => (
                  <li key={index}>
                    <a href={element.url}>
                      <Icon icon={`bi:${element.platform.toLowerCase()}`} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  paraList: PropTypes.array,
  modalClose: PropTypes.func,
  social_handles: PropTypes.array
}

export default Modal;