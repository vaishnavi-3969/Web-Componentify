import React, { useState, useEffect } from 'react';
import Button from "../components/Button";
import arrowRight from "../assets/arrow-right.svg";
import Loader from '../components/Loader';
import Accordion from "../components/Accordion";
import Modal from "../components/Modal";
import Feature6 from "../components/TopHeader";
import Footer from "../components/Footer";
import Login from "../components/Login";
import BottomNav from "../components/Bottom Nav bar/BottomNavBar";

const accordionItems = [
  { title: "Section 1", content: "Content for Section 1" },
  { title: "Section 2", content: "Content for Section 2" },
];

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-col items-center space-y-4">
      {isLoading ? <Loader /> : (
        <>
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
        </>
      )}
       <BottomNav backUrl=" " nextUrl="/Button" backName=" " nextName="Button" />
    </div>
   
  );
};

export default Homepage;