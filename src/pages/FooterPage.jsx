import { Heading } from "../components/Heading";
import Footer from "../components/Footer";
import CustomFooter from "../components/CustomFooter";
import BottomNav from "../components/Bottom Nav bar/BottomNavBar";
export const FooterPage = () => {
  return (
    <>
      <Heading title={"Footer"} />
      <Footer />

      <CustomFooter />
      <BottomNav backUrl="/Modal" nextUrl="/Avatar" backName="Modal" nextName="Avatar" />
    </>
  );
};
