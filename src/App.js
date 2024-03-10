import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
export const MyContext = createContext();

function App() {
  const [constextState, setContextState] = useState({
    name: "",id:""
  });

  return (
    <div className="App">
      <MyContext.Provider value={{constextState, setContextState}}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </MyContext.Provider>
    </div>
  );
}

export default App;
