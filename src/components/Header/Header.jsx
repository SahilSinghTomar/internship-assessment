import PropTypes from 'prop-types';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Header = ({ data, user }) => {
  const { logoDark, logoLight } = data;
  const [mobileToggle, setMobileToggle] = useState(false);

  const handleMobileToggle = () => {
    setMobileToggle(!mobileToggle);
  };

  return (
    <header>
      {/* Mob header */}
      <div className="mob-header" onClick={handleMobileToggle}>
        <div className="mob-h-left">
          <Link className="navbar-brand" to="/">
            <img className="logo-dark" title="" alt="" src={logoDark} />
            <img className="logo-light" title="" alt="" src={logoLight} />
          </Link>
        </div>
        <div className="mob-h-right">
          <button className="toggler-menu">
            <span />
          </button>
        </div>
      </div>
      {/* End */}
      {/* Header Top */}
      <div
        className={`header-left-fixed one-page-nav ${
          mobileToggle ? 'menu-open' : ''
        }`}
      >
        {/* Brand */}
        <div className="logo">
          <Link className="navbar-brand" to="/">
            <img
              className="logo-dark"
              title="Lilon"
              alt="site-logo"
              src={logoDark}
            />
            <img
              className="logo-light"
              title="Lilon"
              alt="site-logo"
              src={logoLight}
            />
          </Link>
        </div>
        {/* / */}
        <ul className="main-menu">
          <li>
            <ScrollLink
              to="home"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              About
            </ScrollLink>
          </li>
          {user.services && <li>
            <ScrollLink
              to="services"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Services
            </ScrollLink>
          </li>}
          {user.projects && <li>
            <ScrollLink
              to="work"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Portfolio
            </ScrollLink>
          </li>}
          {user.skills && <li>
            <ScrollLink
              to="skills"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Skills
            </ScrollLink>
            </li>}
            {user.testimonials && <li>
              <ScrollLink
                to="testimonials"
                spy={true}
                duration={500}
                onClick={() => setMobileToggle(false)}
              >
                Testimonials
              </ScrollLink>
              </li>}
            <li>
            {user.blogs && <ScrollLink
              to="blog"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Blog
            </ScrollLink>}
          </li>
          <li>
            <ScrollLink
              to="contact"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
        <ul className="nav social-link">
          {user.social_handles.map((element, index) => (
            <li key={index}>
              <a href={element.url} target="_blank" rel="noopener noreferrer">
                <Icon icon={`fa6-brands:${element.platform.toLowerCase()}`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* End Header Top */}
    </header>
  );
};

Header.propTypes = {
  data: PropTypes.object,
};

export default Header;
