import React from "react";
import Button from "../components/Button";
import arrowRight from "../assets/arrow-right.svg";
import Accordion from "../components/Accordion";
import Modal from "../components/Modal";
import Feature6 from "../components/TopHeader";
import Footer from "../components/Footer";

const accordionItems = [
  { title: "Section 1", content: "Content for Section 1" },
  { title: "Section 2", content: "Content for Section 2" },
];
const Homepage = () => {
  return (
    <>

    <div className="flex flex-col items-center space-y-4">
      {/* Default Button */}
      <Button label={"Default Button"} />

      {/* Customized Button 1 */}
      <Button
        iconURL={arrowRight}
        label={"Customized Button 1"}
        borderColor={"border-black"}
        textColor={"text-white"}
        backgroundColor={"bg-black"}
      />

      {/* Customized Button 2 */}
      <Button
        label={"Customized Button 2"}
        borderColor={"border-blue-500"}
        textColor={"text-blue-500"}
        backgroundColor={"bg-white"}
      />

      {/* Customized Button 3 */}
      <Button
        label={"Customized Button 3"}
        borderColor={"border-green-500"}
        textColor={"text-green-500"}
        backgroundColor={"bg-white"}
      />
      <Accordion items={accordionItems} />
    </div>
      <Feature6/>

    <Accordion/>
    <Modal/>
          <Feature6/>
          <Footer />
    </div>
  );
};

export default Homepage;
