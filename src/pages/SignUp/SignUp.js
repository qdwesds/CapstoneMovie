import React from 'react'
import SignUpAnimation from '../../Components/SignUpAnimation/SignUpAnimation'
import SignUpForm from '../../Components/SignUpForm/SignUpForm'

const SignUp = () => {
  return (
    <div className="signUp grid grid-cols-2 h-screen bg-gray-300">
      <div className="flex items-center justify-center">
        <SignUpAnimation/>
      </div>
      <div>
        <SignUpForm/>
      </div>
    </div>
  )
}

export default SignUp