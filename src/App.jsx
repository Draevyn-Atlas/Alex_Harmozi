import { useLocation } from "react-router-dom";
import "./App.css";
import React, { useEffect } from "react"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AllRoutes from "./pages/AllRoutes";
import SideBar from "./components/secondPage/SideBar";

function App() {
  let {pathname} = useLocation();
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
