import { useNavigate } from "react-router-dom";
import CvComponent from "../components/cv.component";
const AboutPage = (props) => {
  const { data } = props;

  return (
    <div>
      <CvComponent />
    </div>
  );
};

export default AboutPage;
