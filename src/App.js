import Header from "./Components/Header.js";
import Footer from "./Components/Footer";
import About from "./Components/About";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

function App() {
  const [showHideSearch, setShowHideSearch] = useState(true);
  const setSearch = (bool) => {
    setShowHideSearch(bool);
  };

  return (
    <div className="App">
      <Router>
        <Header title="E-Commerce" search={showHideSearch} />
        <Routes>
          <Route exact path="/" element={<>hello</>}></Route>
          <Route
            exact
            path="/about"
            element={<About search={setSearch} />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
