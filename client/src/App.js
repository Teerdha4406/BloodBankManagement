import "./App.css";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Home from "./Component/home";
import Doner from "./Component/Doner";
import DonerList from "./Component/DonerList";
import Footer from "./Component/Footer";
import LoginComponent from "./Component/loginComponent";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import SignUpComponent from "./Component/signUPComponent";

function App() {
  const [logedInUser, setLogedInUser] = useState(false);

  return (
    <Router>
      <div className="App">
        {!logedInUser ? (
          <Routes>
            <Route
              path="/login"
              element={<LoginComponent setLogedInUser={setLogedInUser} />}
            />
            <Route path="/signup" element={<SignUpComponent />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Doner" element={<Doner />} />
              <Route path="/DonerList" element={<DonerList />} />
              <Route path="*" element={<Home />} /> {/* Fallback route */}
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
