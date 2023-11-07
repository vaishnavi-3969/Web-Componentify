// import Button from "../components/Button";
// import arrowRight from "../assets/arrow-right.svg";
// import Accordion from "../components/Accordion/Accordion";
// import Modal from "../components/Modal";
// import Feature6 from "../components/TopHeader";
// import Footer from "../components/Footer/Footer";
// import Login from "../components/Login/Login";
import React, { Fragment } from "react";
import BottomNav from "../components/Bottom Nav bar/BottomNavBar";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";



const Homepage = () => {
  return (
    <Fragment>
    <main >
    <Sidebar/>
    <Content/>
    <BottomNav backUrl=" " nextUrl="/Button" backName=" " nextName="Button" />
    </main>
    </Fragment>

  );
};

export default Homepage;
