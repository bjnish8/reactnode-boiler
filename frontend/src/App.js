import React, { useState, useEffect } from "react";
import axios from "axios";
import { Page1, Page2 } from "./views";
import BaseRouter from "./routes";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const App = () => {
  const [data, setData] = useState("what is this");
  useEffect(() => {
    axios({
      method: "get",
      url: BACKEND_URL,
    })
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  });
  return (
    <div className="App">
      <BaseRouter />
    </div>
  );
};

export default App;
