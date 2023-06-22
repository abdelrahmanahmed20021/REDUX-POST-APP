import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile } from "../pages/Profile";
import { About } from "../pages/About";
import { Setting } from "../pages/Setting";
import { Error } from "../pages/Error";
import { Navbar } from "../components/Navbar";
import { Email } from "../components/Email";
import { Them } from "../components/Them";

export default function Router({ children }) {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={children} />
        <Route path="/profile" element={<Profile />}>
          <Route index element={<Email />} />
          <Route path="email" element={<Email />} />
          <Route path="them" element={<Them />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
