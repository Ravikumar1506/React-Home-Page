import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  function toggleMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? "dark" : "light"}>

      <Navbar />

      <Home
        darkMode={darkMode}
        toggleMode={toggleMode}
      />

      <Footer />

    </div>
  );
}

export default App;