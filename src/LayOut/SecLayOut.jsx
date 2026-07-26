import { Outlet } from "react-router";
import Footer from "./TheFooter/Footer";
import Header from "./Header/Header";

function SecLayOut() {
    return (
    <>
    <Header/>
      {/* Content Menu*/}
      <main>
        <Outlet/>
      </main>
    <Footer/>
    </>
  );
}

export default SecLayOut;