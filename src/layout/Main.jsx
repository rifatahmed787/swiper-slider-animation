import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Navbar";
import Footer from "../shared/Footer/Footer";
import TopNavbar from "../shared/Header/TopNavbar";

const Main = () => {
  return (
    <div>
      <TopNavbar />
      <Header />
      <Outlet />
      {/* <Footer/> */}
    </div>
  );
};

export default Main;
