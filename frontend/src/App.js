import React, {useState, useEffect} from 'react';
import axios from 'axios';


const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
function App() {
  const [data, setData] = useState("what is this")
  useEffect(() => {
    axios({
      method: 'get',
      url: BACKEND_URL,
    })
    .then(response => setData(response.data))
    .catch(error => console.log(error))
  })
  return (
    <div className="App">
    <h1> {data} </h1>
    </div>
  );
}

export default App;
