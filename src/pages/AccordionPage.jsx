import React from "react"
import Accordion from "../components/Accordion";

export const AccordionPage = () => {

const accordionItems = [
    { title: "Section 1", content: "Content for Section 1" },
    { title: "Section 2", content: "Content for Section 2" },
  ];
    return (
        <>
  <Accordion items={accordionItems} />
        </>
    )
}