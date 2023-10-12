import React from "react"
import {Heading} from "../components/Heading";
import BottomNav from "../components/Bottom Nav bar/BottomNavBar";
export const Alert = () => {
    return (
        <>
            <Heading title={"Alert"}/>
            <BottomNav backUrl="/card" nextUrl="/badge" backName="Card" nextName="Badge" />
        </>
    )
}