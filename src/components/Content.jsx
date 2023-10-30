import React, { Fragment, useEffect } from "react";
import Button from "../components/Button";
import arrowRight from "../assets/arrow-right.svg";
import Accordion from "../components/Accordion";
import Modal from "../components/Modal";
import Feature6 from "../components/TopHeader";
import Footer from "../components/Footer";
import Login from "../components/Login";
import BottomNav from "./Bottom Nav bar/BottomNavBar";
import { Outlet, useLocation } from "react-router-dom";
import RouteComponent from "./RouteComponent";
import Homepage from "../pages/Homepage";
import ButtonDoc from "../pages/ButtonDoc";
import { ModalPage } from "../pages/ModalPage";
import { FooterPage } from "../pages/FooterPage";
import { Avatar } from "../pages/Avatar";
import { Card } from "../pages/Card";
import { Alert } from "../pages/Alert";

const Content = () => {
  const location = useLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getComponentForPath = (path) => {
   
 

    switch (path) {
      case '/':
        return <RouteComponent />;
      case '/button':
        return <ButtonDoc />;
      case '/Modal':
        return <ModalPage />;
      case '/Footer':
        return <FooterPage />;
        case '/Avatar':
          return <Avatar />;
          case '/card':
            return <Card />;
          case '/alert':
            case '/Badge':
              return <Card />;
            
      default:
        return null; // Return a default component or handle not found
    }
  };
 
  useEffect(() => {
   
  }, [location.pathname, getComponentForPath]);


  // Define a function to get the component based on the URL endpoint
  
  return (
<Fragment>
<div className="max-md:p-1 sm:ml-64" >
<div className="min-h-screen  py-5">
<div className="flex flex-col items-center space-y-4">
{
  getComponentForPath(location.pathname)
}

 </div>

</div>
</div>



</Fragment>
  );
};

export default Content;
