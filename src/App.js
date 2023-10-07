import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { NavigationLeft } from "./components/NavigationLeft";
import { Avatar } from "./pages/Avatar";
import { Card } from "./pages/Card";
import { Alert } from "./pages/Alert";
import { Badge } from "./pages/Badge";
import ButtonDoc from "./pages/ButtonDoc";
import {ModalPage} from "./pages/ModalPage";
import {FooterPage} from "./pages/FooterPage";

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
              <Route path="/Modal" element={<ModalPage />} />
              <Route path="/Footer" element={<FooterPage />} />
              <Route path="/avatar" element={<Avatar />} />
              <Route path="/card" element={<Card />} />
              <Route path="/alert" element={<Alert />} />
              <Route path="/badge" element={<Badge />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
