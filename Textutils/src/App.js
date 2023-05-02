import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';
import { useState } from 'react';
import Alertmsg from './Alertmsg';
import About from './About';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type1:type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  const togglemode = () => {

    if (mode === "light") {
      setmode("dark");

      document.body.style.backgroundColor = "#042743";
      showalert("dark mode has been enabled", "success")
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("light mode has been enabled", "success")
    }
  }

  return (
    <div>
      <Router>
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode}></Navbar>
        <Alertmsg alert={alert}></Alertmsg>
        <Routes>
          <Route exact path="/" element={<div className='container'>
            <Textform first="Enter The Text To Analyze Below" showalert={showalert} mode={mode}></Textform>
            {/* Enter The Text To Analyze Below Try TextUtils - word counter, character counter, remove extra spaces  */}
          </div>} />
        </Routes>

        <Routes>
          <Route exact path="/About" element={<About mode={mode} ></About>}> </Route>
        </Routes>




      </Router>
    </div>
  )
}
export default App;

























