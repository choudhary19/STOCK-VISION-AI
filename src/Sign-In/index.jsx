import React from 'react'
import { SignIn } from '@clerk/clerk-react'

const SignInPage = () => {
  return (
    <main className="flex items-center justify-center w-full min-h-screen bg-cover "style={{backgroundImage:"url(public/img/Banner/banner_bg.jpg)"}}>
    <SignIn
    signUpUrl='/signup' 
    />
    </main>
  ) 
}

export default SignInPage
