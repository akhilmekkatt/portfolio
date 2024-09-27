import { useNavigate } from "react-router-dom";

const ContactPage = (props) => {
  const { data } = props;

  return (
    <div>
      <h1>Contact Akhil</h1>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/akhilmekkatt" target="blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/akhilmekkatt/mk-art-store" target="blank">
            Git
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/akhilmekkatt" target="blank">
            Instagram
          </a>
        </li>
        <li>
          <a href="http://flickr.com/mekkatt" target="blank">
            Flickr
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactPage;
