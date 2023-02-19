import logo from './logo.svg';
import './App.css';
import { useEffect,useRef } from 'react';
import axios from 'axios';

function App() {
  console.log(process.env.REACT_APP_NAME);
  let posts= useRef();
  useEffect(()=>{
  const apiUrl = "https://graph.instagram.com/me/media";
 
  const accessToken = process.env.REACT_APP_IG_KEY ;
  const params = new URLSearchParams({
  fields: "id,caption,media_type,media_url,thumbnail_url,permalink",
  access_token: accessToken,
  });
    // console.log("inside useEffect");
    axios.get(apiUrl + "?" + params).then(response=>{
        posts.current = response.data.data;
    }).then(()=>{
        console.log(posts.current);
    }).catch(error => {
        console.log(error);
    });
},
[]
);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with {process.env.REACT_APP_NAME} A R
        </a>
      </header>
    </div>
  );
}

export default App;
