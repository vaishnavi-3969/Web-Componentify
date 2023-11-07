import React from 'react';
import Button from "../components/Button";
import arrowRight from "../assets/arrow-right.svg";
import Accordion from "../components/Accordion";
import Modal from "../components/Modal";
import Feature6 from "../components/TopHeader";
import Footer from "../components/Footer";
import Login from "../components/Login";
import BottomNav from "./Bottom Nav bar/BottomNavBar";
import { Outlet } from 'react-router-dom';


const RouteComponent = () => {
    const accordionItems = [
        { title: "Section 1", content: "Content for Section 1" },
        { title: "Section 2", content: "Content for Section 2" },
      ];
    return (

   
    <div className="max-md:p-1 " >
    <div className="min-h-screen  py-5">
    <div className="flex flex-col items-center space-y-4">

       {/* Default Button */}
       <Button>Default Button</Button>
 
       {/* Customized Button 1 */}
       <Button
         iconURL={arrowRight}
         borderColor={"border-black"}
         textColor={"text-white"}
         backgroundColor={"bg-black"}
       >
         Customized Button 1
       </Button>
 
       {/* Customized Button 2 */}
       <Button
         borderColor={"border-blue-500"}
         textColor={"text-blue-500"}
         backgroundColor={"bg-white"}
       >
         Customized Button 2
       </Button>
 
       {/* Customized Button 3 */}
       <Button
         borderColor={"border-green-500"}
         textColor={"text-green-500"}
         backgroundColor={"bg-white"}
       >
         Customized Button 3
       </Button>
 
       <Accordion items={accordionItems} />
       <Login />
       <Feature6 />
       <Modal />
       <Footer />
     </div>
    
    </div>
    </div>
  )
}

export default RouteComponent