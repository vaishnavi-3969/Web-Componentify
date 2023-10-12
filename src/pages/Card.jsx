import React from "react"
import {Heading} from "../components/Heading";
import BottomNav from "../components/Bottom Nav bar/BottomNavBar";
export const Card = () => {
    return (
        <>
            <Heading title={"Card"}/>
            <BottomNav backUrl="/Avatar" nextUrl="/Alert" backName="Avatar" nextName="Alert" />
        </>
    )
}