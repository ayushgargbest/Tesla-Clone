import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import SignIn from './Pages/Auth/Signin';
import SignUp from './Pages/Auth/SignUp';
function App() {
  return (
    <Router>
      <div className="bg-sky-500 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
