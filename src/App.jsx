import { useLocation } from "react-router-dom";
import "./App.css";
import React, { useContext, useEffect } from "react"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AllRoutes from "./pages/AllRoutes";
import SideBar from "./components/secondPage/SideBar";
import { ContextApi } from "./context/ContextApi";

function App() {
  let {pathname} = useLocation();
  console.log(name);

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  // Scroll to the top of the page when the component is mounted
  window.scrollTo(0, 0);
  return (
    <>
      <Navbar/>
      <div className="flex ">
      {pathname === "/" || pathname !== "/privacy-policy" && <SideBar/>}
      <AllRoutes />
      </div>
      
      <Footer/>
    </>
  );
}

export default App;
