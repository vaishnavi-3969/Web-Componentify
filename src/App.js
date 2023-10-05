import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { NavigationLeft } from "./components/NavigationLeft";
import { Avatar } from "./components/Avatar";
import { Card } from "./components/Card";
import { Alert } from "./components/Alert";
import { Badge } from "./components/Badge";
import ButtonDoc from "./Documentation/ButtonDoc";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="home-container">
          <NavigationLeft />
          <div className="routes-container">
            <Routes>
              <Route path="/" element={<Homepage />} exact />
              <Route path="/button" element={<ButtonDoc />} />
              <Route path="/avatar" element={<Avatar />} />
              <Route path="/card" element={<Card />} />
              <Route path="/alert" element={<Alert />} />
              <Route path="/badge" element={<Badge />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
