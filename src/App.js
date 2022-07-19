import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "./pages";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Bookings from "./pages/bookings";
import Trip from "./pages/trip";
import "./assets/css/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/trip/:id" element={<Trip />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
