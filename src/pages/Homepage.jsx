import React from "react";
import Modal from "../components/Modal";
import Feature6 from "../components/TopHeader";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <div className="flex flex-col items-center space-y-4">
        <Feature6 />
        <Modal />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
