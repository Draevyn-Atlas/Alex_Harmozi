import { useLocation } from "react-router-dom";
import "./App.css";
import React from "react"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AllRoutes from "./pages/AllRoutes";
import SideBar from "./components/secondPage/SideBar";

function App() {
  let {pathname} = useLocation();
  
  return (
    <>
      <Navbar/>
      <div className="flex ">
      {pathname !== "/" && <SideBar/>}
      <AllRoutes />
      </div>
      
      <Footer/>
    </>
  );
}

export default App;
