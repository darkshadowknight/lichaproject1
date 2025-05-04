import React from "react"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import History from "./pages/History.jsx";
import Culture from "./pages/Culture.jsx";
import Food_Places from "./pages/Food_Places.jsx";
import Hotel from "./pages/Hotel.jsx";
import Tourist_Spot from "./pages/Tourist_Spot.jsx";
import Contact from "./pages/Contact.jsx";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/History" element={<History/>} />
        <Route path="/Culture" element={<Culture/>} />
        <Route path="/Foods" element={<Food_Places/>} />
        <Route path="/Hotel" element={<Hotel/>} />
        <Route path="/TouristSpot" element={<Tourist_Spot/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </div>
  )
}
export default App
