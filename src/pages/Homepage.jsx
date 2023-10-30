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
