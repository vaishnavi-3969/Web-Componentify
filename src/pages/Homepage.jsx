import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import arrowRight from "../assets/arrow-right.svg";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import Feature6 from "../components/TopHeader";
import Footer from "../components/Footer";

import BottomNav from "../components/Bottom Nav bar/BottomNavBar";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Feature6 />
          <Modal />
        </>
      )}
      <BottomNav backUrl=" " nextUrl="/Button" backName=" " nextName="Button" />
    </div>
  );
};

export default Homepage;
