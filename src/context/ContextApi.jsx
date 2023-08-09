import React,{ createContext } from "react";
import axios from "axios";

export const ContextApi = createContext(null)

const ContextApiProvider = ({children})=>{

    // post details to db
    function postDetails(data){
        axios.post("https://tiny-jade-mussel-hat.cyclic.app/details/save",{info:data}).then((res)=>console.log("context-api-post-details-res ",res)).catch((err)=>console.log("context-api-post-details-err",err))
      }

    //   post-details-and-emailto-db-and-userInfo-to-db
      function postDetailsAndEmailVerification(signupData,data){
        axios.post("https://tiny-jade-mussel-hat.cyclic.app/details/save",{info:data,email:signupData.email}).then((res)=>console.log("res",res)).catch((err)=>console.log("err",err))
        
        axios.post("https://tiny-jade-mussel-hat.cyclic.app/auth/signup",signupData).then((res)=>console.log("res",res)).catch((err)=>console.log("err",err))
      }

    
    return <ContextApi.Provider value={{postDetails,postDetailsAndEmailVerification}} >{children}</ContextApi.Provider>
}

export default ContextApiProvider 