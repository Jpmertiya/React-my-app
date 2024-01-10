import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import TextForm from "./Components/TextForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./Components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState({ msg: "Made with Love ❤️", type: "success " });

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert({ msg: "Made with Love 💕", type: "success " });
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode is enabled now", "success ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode is enabled now", "success ");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="Fragger" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter The Text To Analyse"
                mode={mode}
              />
            }
          ></Route>
          <Route path="/about" element={<About mode={mode} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
