import React, { Suspense, useEffect, useState } from "react";
import "../styles/pages.scss";

const HomeComponent = (props) => {
  const roles = ["Artist", "Engineer", "Traveller", "Photographer"];
  const [index, setIndex] = useState(0);
  let curIndex = index;

  setTimeout(() => {
    setIndex(curIndex + 1);
    if (index == roles.length - 1) {
      curIndex = 0;
      setIndex(curIndex);
    }
  }, 8000);

  /* useEffect(() => {
    console.log(index);
  }, [index]); */

  return (
    <>
      <div className="home d-flex justify-content-center align-items-center">
        <div>
          <h1 className="display-1  animate__animated   animate__zoomIn animate__delay-0.5s">
            Hi I AM Akhil,
          </h1>
          <h1 className="display-1 text-danger display-1  animate__animated  animate__zoomIn animate__delay-1s">
            Sometimes I am, <br />
            {roles[index]}
          </h1>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
