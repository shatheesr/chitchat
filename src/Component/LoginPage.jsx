import React from 'react'
import { UserAuth } from '../Context/AuthContext'

const LoginPage = () => {
  const { currentUser,SignWithGoogle}  = UserAuth();
  const handleLogin = async() =>{
    console.log(currentUser);
    try {
      await SignWithGoogle();
      console.log(currentUser);
    } catch (error) {
      console.log(error)
      
    }
  }
  
  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">Join the conversation,meet new people and make connection in one shared room</p>
      <button onClick={handleLogin} className="btn ">LOGIN WITH GOOGLE</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default LoginPage