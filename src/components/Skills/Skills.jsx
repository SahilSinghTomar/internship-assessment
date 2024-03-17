import SectionHeading from "../SectionHeading/SectionHeading"
import Progress from "../Progress/Progress";
import PropTypes from 'prop-types';

const Skills = ({ data }) => {
 data.sort((a, b) => a.sequence - b.sequence);

  return (
    <section id="skills">
        <SectionHeading title="My Skills" />
        <ul className="skills-list">
            {data.map((skill, index) => (
                <li className="skill" key={index}>
                    <img src={skill.image.url} alt={skill.name} />
                    <h4 className="skills-text">{skill.name}</h4>
                    <Progress percentage={skill.percentage} />
                </li>
            ))}
        </ul>
    </section>
  )
}

Skills.propTypes = {
  data: PropTypes.array.isRequired
};

export default Skills