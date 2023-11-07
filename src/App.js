import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { NavigationLeft } from "./components/LeftNavigation/NavigationLeft";
import { Avatar } from "./pages/Avatar";
import { Card } from "./pages/Card";
import { Alert } from "./pages/Alert";
import { Badge } from "./pages/Badge";
import ButtonDoc from "./pages/ButtonDoc";
import {ModalPage} from "./pages/ModalPage";
import {FooterPage} from "./pages/FooterPage";




function App() {
  
  return (
    <BrowserRouter>
    
    <div className="home-container">
    <div className="routes-container  ">
      <Routes>
      <Route path="/" element={<Homepage />}>
     <Route path="Button" element={<ButtonDoc />} />
     <Route path="Modal" element={<ModalPage />} />
     <Route path="Footer" element={<FooterPage />} />
     <Route path="Avatar" element={<Avatar />} />
     <Route path="card" element={<Card />} />
     <Route path="alert" element={<Alert />} />
     <Route path="badge" element={<Badge />} />
     </Route>
      </Routes>
    </div>
  </div>
    </BrowserRouter>
  );
}


export default App;
