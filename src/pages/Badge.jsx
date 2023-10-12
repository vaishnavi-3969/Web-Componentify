import React from "react"
import {Heading} from "../components/Heading";
import BottomNav from "../components/Bottom Nav bar/BottomNavBar";
export const Badge = () => {
    return (
        <>
            <Heading title={"Badge"}/>
            <BottomNav backUrl="/Alert" nextUrl="/" backName="Alert" nextName="Back To Home" />
        </>
    )
}