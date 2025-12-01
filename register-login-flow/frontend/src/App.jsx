import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Login from "./Pages/login";
import Signup from "./Pages/signup";
import Home from "./Pages/home";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />}/>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
