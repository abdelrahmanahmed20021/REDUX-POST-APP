import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile } from "../pages/Profile";
import { About } from "../pages/About";
import { Setting } from "../pages/Setting";
import { Error } from "../pages/Error";
import { Navbar } from "../components/Navbar";

export default function Router({ children }) {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={children} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
