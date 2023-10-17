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
import { AccordionPage } from "./pages/AccordionPage";
import { LoginPage } from "./pages/LoginPage";
import { DropDownMenuPage } from "./pages/DropDwonMenuPage";

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
              <Route path="/Button" element={<ButtonDoc />} />
              <Route path="/Modal" element={<ModalPage />} />
              <Route path="/Footer" element={<FooterPage />} />
              <Route path="/Avatar" element={<Avatar />} />
              <Route path="/card" element={<Card />} />
              <Route path="/Alert" element={<Alert />} />
              <Route path="/Badge" element={<Badge />} />
              <Route path="/accordion" element={<AccordionPage/>} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/drop-down" element={<DropDownMenuPage/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
