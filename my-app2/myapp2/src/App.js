
import "./App.css";
import React, { useState }  from 'react'
import Navbar from './components/Navbar'
import Textarea from './components/Textarea'
import Alert from './components/Alert'
// import login from './components/login'
// import About from './components/About'
// import {BrowserRouter as Router,Route, Routes } from "react-router-dom";

// import About from './components/About'
// import Courses from './components/Courses'
// import Impdates from './components/Impdates'
// import Hero from './components/Hero'
// import Contact from './components/Contact'


function App() {
  const [mode, setMode] = useState("light");
  const[alert,setAlert]=  useState(null);
  
  const showAlert=(type,message)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000) 
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundcolor='black';
      showAlert('success',"dark mode has been enabled");
    } else {
      setMode("light");
      document.body.style.backgroundcolor='light';
      showAlert('primary',"light mode has been enabled");

    }
  };

  return (
    <>
   
    
      {/* <Navbar  mode={mode}/> */}
      <Navbar  mode={mode} toggleMode={toggleMode}/>
      {/* <Routes>
      <Route path="/login" component={login}/>
      <Route path="/About" component={About}/>
      </Routes> */}
      <Alert alert={alert}/>
      
      <Textarea showAlert={showAlert} heading="Write your text in the TextArea" />
      {/* <login/> */}
      
      </>
  );
}

export default App;


