import logo from "./logo.svg";
import "./App.css";
// import Textform from "./components/Textform";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Alert from "./components/Alert";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Textform from "./components/Textform";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Router>
        <Navbar title="TextUtils" Aboutyoooo="About Us1" />

        <div className="container" my-3>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/Textform" element={<Textform />} />
            <Route path="/counter" element={<Counter />} />
            {/* <Route path="/">
              <Alert alert="This is Alert" />
              
            </Route> */}
          </Routes>
          {/* <Textform heading="Enter the text to analyze below" /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
