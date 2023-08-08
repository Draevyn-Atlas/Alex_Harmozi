import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Error from "./Error";
import EventPage from "../pages/EventPage"
import ServiceForm from "../pages/ServiceForm"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={< EventPage/>} />
      <Route path="/service-form" element={
        <ServiceForm/>} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AllRoutes;


