import { useLocation } from 'react-router-dom'
import './App.css'
import React, { useContext, useEffect } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AllRoutes from './pages/AllRoutes'
import SideBar from './components/secondPage/SideBar'
import { Spinner } from '@chakra-ui/react'
import { ContextApi } from './context/ContextApi'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  let { pathname } = useLocation()
  const { loading } = useContext(ContextApi)

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0)
  }, [])
  // Scroll to the top of the page when the component is mounted
  window.scrollTo(0, 0)

  return (
    <>
      <Navbar />
      <div className="flex">
        {loading && (
          <div className="fixed z-10  left-[50%] top-[30%]">
            <Spinner
              size="xl"
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
            />
          </div>
        )}
        {pathname === '/' || (pathname !== '/privacy-policy' && <SideBar />)}
        <AllRoutes />
      </div>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
