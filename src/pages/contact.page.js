import { useNavigate } from "react-router-dom";

const ContactPage = (props) => {
  const { data } = props;

  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        <li>
          <a href="https://github.com/akhilmekkatt/mk-art-store">Git</a>
        </li>
        <li>
          <a href="https://www.instagram.com/akhilmekkatt">Instagram</a>
        </li>
        <li>
          <a href="http://flickr.com/mekkatt">Flickr</a>
        </li>
      </ul>
    </div>
  );
};

export default ContactPage;
