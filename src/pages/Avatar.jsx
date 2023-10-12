import React from "react"
import {Heading} from "../components/Heading";
import BottomNav from "../components/Bottom Nav bar/BottomNavBar";
export const Avatar = () => {
    return (
        <>
            <Heading title={"Avatar"}/>
            <BottomNav backUrl="/Footer" nextUrl="/Card" backName="Footer" nextName="Card" />
        </>
    )
}