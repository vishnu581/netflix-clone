import { useState } from "react"
import Header from "./Header"
const Login = () => {

  const [isSignin , setisSignin] =useState(true)

const toggleSignForm =()=>{
  setisSignin(!isSignin)

}


  return (
  <div>
    <Header/>
    <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg" alt="" />
    </div>
    <form action=""className="w-3/12 absolute  p-12 m-36 bg-black mx-auto right-0 left-0 bg-opacity-50">

    <h1 className="text-white ">{isSignin? "SIGN IN" : "CREATE ACCOUNT"}</h1>
      
            <input type="text" placeholder="Enter Email ID" className="p-2 my-2  w-full bg-gray-700"/>
            
          { !isSignin &&<input type="text" 
            placeholder="Enter Name"className="
             p-2 my-2 w-full bg-gray-700" />}
            
            <input type="password" placeholder="Enter password"className=" p-2 my-2 w-full bg-gray-700" />
            <br />
            <button className="p-2 my-4 bg-red-700 w-full rounded-lg">{isSignin? "LOGIN IN": "SIGN UP"}</button>
            <p className="py-4 text-amber-50 cursor-pointer " onClick={toggleSignForm}>{isSignin?"SIGN UP": " BACK TO LOAGIN"}</p>
    </form>
  </div>

  )
}

export default Login