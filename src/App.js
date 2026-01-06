import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState(false)
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    setMode(!mode);
    const body = document.body;
    if (!mode) {
      body.style.color = "white";
      body.style.backgroundColor = "#121212";
      showAlert("Dark mode has been enabled!");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      body.style.color = "#121212";
      body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled!");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
      <Router>
        <NavBar
          title="My Application"
          firstLink="Home"
          secondLink="About"
          mode={mode}
          toggleMode={toggleMode} />
        <Alert
          alert={alert} />
        <Routes>
          <Route exact path='/TextUtils-React/' element={<TextForm
            heading="Enter the text"
            mode={mode}
            showAlert={showAlert} />} />
          <Route exact path='/TextUtils-React/about' element={<About mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
