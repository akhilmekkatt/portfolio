import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import data from "../data/config.json";
import "../styles/pages.scss";
const CvComponent = (props) => {
  return (
    <section className="cv">
      <h1 className="animate__animated animate__bounce animate__delay-2s">
        CV
      </h1>
      <p>
        I am a Senior Full Stack Javascript Engineer,
        <br />
        Seeking a challenging career in the area of software development where I
        can create value for my company by utilizing technical proficiencies
        with 11+ years of experience in various domains anexperties.
        <br />
        HTML(5), CSS(3), LESS, Sass, Angular, Typescript, React, NodeJs, Git,
        Agile and so on...
      </p>
      <Button>Download CV</Button>
      <br />
      <br />
      <ul className="cv__list">
        {data?.career.map((employer, index) => (
          <li key={index} className="cv__block d-flex">
            <div className="cv__content in-view">
              <h6>{employer.employer}</h6>
              <div className="role">{employer.role}</div>
              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: employer.description }}
              ></div>
            </div>
            <div className="animated cv__content-brief in-view">
              {employer.from}- {employer.to}
            </div>
            <span className="animated cv__square in-view"></span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CvComponent;
