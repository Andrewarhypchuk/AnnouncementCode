import './App.css';
import Announcement from "./AnnouncementComponent/AnnouncementComponent";
import {Route,Routes} from "react-router-dom";
import CreateAnnouncement from "./CreateComponent/CreateComponent";
import React from "react";
import {useState,useEffect} from "react";
import List from "./ListComponent/ListComponent";

function App() {
    const [base, setBase] = useState([]);
    useEffect(()=>{
        console.log(base)
    },base)

  return (
    <div  className="App">
          <Routes>
              <Route exact path="/" element={<Announcement />}/>
              <Route exact path="/create" element={<CreateAnnouncement  setBase={setBase} base={base} />}/>
              <Route exact path="/list" element={<List  setBase={setBase} base={base} />}/>
          </Routes>


    </div>
  );
}

export default App;
