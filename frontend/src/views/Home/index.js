import React from "react";
import "./styles.scss";

import { LinkBtn, Header } from "../../components";

const Home = () => {
  return (
    <React.Fragment>
      <h2> Home Page </h2>
      <LinkBtn className="page-link" to="/page1">
        Goto Page1
      </LinkBtn>
      <LinkBtn className="page-link" to="/page2">
        Goto Page2
      </LinkBtn>
    </React.Fragment>
  );
};

export default Home;
