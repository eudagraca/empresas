import React from "react";

// import logo from './logo.svg';
import "./App.css";
import { Login } from "./pages/login";
import { Profile } from "./pages/profile";
import { Home } from "./pages/home";
import { Register } from "./pages/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import PublicRoute from "./publicRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}></Route>

        <Route path="/" element={<PublicRoute />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/" element={<ProtectedRoute />}>
          
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
