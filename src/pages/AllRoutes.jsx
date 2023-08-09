import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Error from './Error'
import EventPage from '../pages/EventPage'
import ServiceForm from '../pages/ServiceForm'
import BussinessAnalysis from '../components/secondPage/BussinessAnalysis'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<EventPage />} />
      <Route
        path="/privacy-policy"
        element={<BussinessAnalysis title="privacy policy" />}
      />
      <Route path="/events/client-dream-outcome" element={<EventPage />} />
      <Route
        path="/events/client-pain-points-analysis"
        element={<EventPage />}
      />
      <Route path="/events/grand-slam-$100M-offers" element={<EventPage />} />
      <Route
        path="/events/client-pain-point-solutions"
        element={<EventPage />}
      />
      <Route path="/service-form" element={<ServiceForm />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default AllRoutes
