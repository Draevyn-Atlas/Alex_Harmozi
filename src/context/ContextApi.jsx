import React, { createContext, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
export const ContextApi = createContext(null)

const ContextApiProvider = ({ children }) => {
  const [showOtp, setShowOtp] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  const [showSignIn, setShowSignIn] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [loading, setLoading] = useState(false)

  // post-details-to-db
  function postDetails(data) {
    setShowSignUp(false)
    setLoading(true)
    axios
      .post('https://tiny-jade-mussel-hat.cyclic.app/details/save', {
        info: data,
      })
      .then((res) => {
        // console.log('data', data, 'context-api-post-details-res ', res)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        console.log('context-api-post-details-err', err)
      })
  }

  // get-acounts-details
  function getAccountDetails() {
    setLoading(true)
    return axios
      .get(
        `https://tiny-jade-mussel-hat.cyclic.app/details/styadav412@gmail.com`,
      )
      .then((result) => {
        // console.log(result.data[0].info)
        setLoading(false)
        return result.data[0].info
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      })
  }

  // update-account-details
  function updateAccountDetails(email, updateData) {
    setLoading(true)
    axios
      .post('https://tiny-jade-mussel-hat.cyclic.app/details/save', {
        info: updateData,
        email: email,
      })
      .then((res) => {
        console.log('res', res)

        toast.success('Account details updated!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        })
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        console.log('err', err)
      })
  }

  //   post-details-and-userInfo-to-db
  function postDetailsAndEmailVerification(signupData, data) {
    setShowSignIn(false)
    setShowSignUp(false)
    setShowOtp(false)
    setLoading(true)
    setUserEmail(signupData.email)
    axios
      .post('https://tiny-jade-mussel-hat.cyclic.app/details/save', {
        info: data,
        email: signupData.email,
      })
      .then((res) => {
        console.log('res', res)
        // setLoading(false)
      })
      .catch((err) => {
        // setLoading(false)
        console.log('err', err)
      })

    // setLoading(true)

    axios
      .post('https://tiny-jade-mussel-hat.cyclic.app/auth/signup', signupData)
      .then((res) => {
        console.log(res.data)
        if (res.data.message === 'User is already registered') {
          setShowSignIn(true)
          setLoading(false)
          true
        } else {
          setLoading(false)
          setShowOtp(true)
        }
      })
      .catch((err) => console.log('err', err))
  }

  // post-verfiy-email-and-otp
  function postVerifyEmailAndOtp(otp) {
    console.log('POstDAta', { otp, userEmail })
    setLoading(true)
    axios
      .post('https://tiny-jade-mussel-hat.cyclic.app/auth/verfiy-email', {
        email: userEmail,
        otp,
      })
      .then((res) => {
        console.log('otp res', res)
        localStorage.setItem('token', JSON.stringify(res.data.token))
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        console.log('err', err)
      })
  }

  return (
    <ContextApi.Provider
      value={{
        postDetails,
        postDetailsAndEmailVerification,
        postVerifyEmailAndOtp,
        showOtp,
        setShowOtp,
        showSignUp,
        setShowSignUp,
        showSignIn,
        setShowSignIn,
        loading,
        setLoading,
        updateAccountDetails,
        getAccountDetails,
      }}
    >
      {children}
    </ContextApi.Provider>
  )
}

export default ContextApiProvider
