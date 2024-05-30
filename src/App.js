import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')// Whether dark mode is enabled or not 

  const [alert, setAlert] = useState(null);

  const [clr, setClr] = useState('white');


  const backColor = (clr) => {
      setClr(clr);
      document.body.style.backgroundColor = clr;
  }
 
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type:type 
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042719';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils -Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils -Light Mode';
    }
  }
  return (
    <>
    <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} clr={clr} backColor={backColor}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route path="/About" element={<About/>}>
            </Route>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode}/>}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;


