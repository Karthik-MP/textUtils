import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light')
  const[alert, setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
      
    },1500)
  }
  const toggleMode=()=>{
    console.log('asd')
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#343a40';
      showAlert('Enabled Dark Mode',"success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert('Enabled light Mode',"success")
    }
  }
  
  return (
    <Router>
    <div className="App">
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}/>
      <div className='container'>
      <Routes>
          <Route exact path="/AboutUs" element={<AboutUs mode={mode} showAlert={showAlert}/>}/>
            {/* <AboutUs />
          </Route> */}
          <Route  path="/" element={<TextForm heading="Enter the text" mode={mode} showAlert={showAlert} />}/>
            {/* <TextForm heading="Enter the text" mode={mode} showAlert={showAlert} />
          </Route> */}
      </Routes>
      </div>
    </div>
    </Router>    
  );
}

export default App;
