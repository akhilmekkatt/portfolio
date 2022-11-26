import { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* Custom Style */
import "./App.scss";

/* components */
import CustomNavbar from "./components/CustomNavbar";
import NotFound from "./components/NotFound";
import { Container } from "react-bootstrap";
import PreLoader from "./components/PreLoader";

/* LAZY LOADING */
const HomeComponent = lazy(() => import("./components/HomeComponent"));
const AboutPage = lazy(() => import("./pages/about.page"));
const ContactPage = lazy(() => import("./pages/contact.page"));

const App = () => {
  const pages = [
    {
      pageLink: "/",
      view: HomeComponent,
      displayName: "HomeComponent",
      showInNavbar: true,
    },
    {
      pageLink: "/about",
      view: AboutPage,
      displayName: "AboutPage",
      showInNavbar: true,
    },
    {
      pageLink: "/contact",
      view: ContactPage,
      displayName: "ContactPage",
      showInNavbar: true,
    },
  ];

  return (
    <Router>
      <CustomNavbar />
      <Container>
        <Suspense fallback={<PreLoader />}>
          <Routes>
            {pages.map((page, index) => {
              return (
                <Route
                  path={page.pageLink}
                  element={<page.view key={index} />}
                  key={index}
                />
              );
            })}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Container>
    </Router>
  );
};

export default App;
