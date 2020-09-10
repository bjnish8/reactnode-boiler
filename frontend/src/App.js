import React, { useState, useEffect } from "react";
import axios from "axios";
import BaseRouter from "./routes";
import { connect } from 'react-redux';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const App = (props) => {
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
      <BaseRouter {...props}/>
    </div>
  );
};

const mapStateToProps = state => {
  return {
      isAuthenticated: state.user && Object.keys(state.user).length > 0,
  }
}


const mapDispatchToProps = dispatch => {
  return {
      onTrySignIn: () => dispatch(() => {})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

