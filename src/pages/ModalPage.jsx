import {Heading} from "../components/Heading";
import Modal from "../components/Modal";
import BottomNav from "../components/Bottom Nav bar/BottomNavBar";
export const ModalPage = () => {
    return (
        <>
        <Heading title={"Modal"}/>
            <Modal/>
        <BottomNav backUrl="/Button" nextUrl="/Footer" backName="Button" nextName="Footer" />
        </>
    )
}