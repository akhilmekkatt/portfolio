import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { IconContext } from "react-icons";

import { FiMenu, FiMoon, FiShoppingCart, FiSun } from "react-icons/fi";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const CustomNavbar = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(e);
  };
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.className = "dark";
    } else {
      document.body.classList.remove("dark");
    }
  });

  return (
    <div className="custom-navbar">
      <Navbar collapseOnSelect expand="lg" variant={isDark ? "dark" : "light"}>
        <Container>
          <Navbar.Brand onClick={() => handleClick("/")}>
            {/*  <img src={logo} height={30} /> */}
            AKHIL
          </Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => handleClick("/")}> Home</Nav.Link>
              <Nav.Link onClick={() => handleClick("/about")}> About</Nav.Link>
              <Nav.Link onClick={() => handleClick("/")}> Art</Nav.Link>
              <Nav.Link onClick={() => handleClick("/")}> Blog</Nav.Link>
              <Nav.Link onClick={() => handleClick("/contact")}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <IconContext.Provider value={{ size: "1.2rem" }}>
            <Nav.Link
              className="ms-auto cart-icon"
              onClick={() => handleClick("/cart")}
            ></Nav.Link>

            <Nav.Link onClick={() => setIsDark(!isDark)}>
              {" "}
              {isDark ? <FiSun color="yellow" /> : <FiMoon />}
            </Nav.Link>
          </IconContext.Provider>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FiMenu />
          </Navbar.Toggle>
          {/*  <Button onClick={() => dispatch({ type: 'INCREMENT' })}>+</Button> */}
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
