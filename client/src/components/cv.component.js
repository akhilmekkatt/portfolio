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
      <p>{data?.career.summary}</p>
      <Button>Download CV</Button>
      <br />
      <br />
      <ul className="cv__list">
        {data?.career?.history.map((employer, index) => (
          <li key={index} className="cv__block d-flex">
            <div className="cv__content in-view">
              <h6>{employer.employer}</h6>
              <div className="role">{employer.role}</div>
              <div
                className="description  d-none d-sm-block d-xs-block"
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
