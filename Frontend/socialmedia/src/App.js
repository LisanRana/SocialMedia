import HomeComponent from "./Components/Home/HomeComponent";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PostComponent from "./Components/Post/PostComponent";
import ProfileComponent from "./Components/Profile/ProfileComponent";
import SignupComponent from "./Components/Signup/SignupComponent";
import LoginComponent from "./Components/Login/LoginComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/post" element={<PostComponent />} />
          <Route path="/profile" element={<ProfileComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
          <Route path="/login" element={<LoginComponent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;