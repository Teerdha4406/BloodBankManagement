import "./App.css";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Home from "./Component/home";
import Doner from "./Component/Doner";
import DonerList from "./Component/DonerList";
import Footer from "./Component/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Doner" element={<Doner />} />
          <Route path="/DonerList" element={<DonerList />} />
          {/* If you want to include login and signup as part of the app navigation */}
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignUpComponent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
