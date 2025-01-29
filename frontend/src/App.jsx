import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignIn from "./Pages/Signin";
import SignUp from "./Pages/SignUp";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <Router>
      <Navbar/>      
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
