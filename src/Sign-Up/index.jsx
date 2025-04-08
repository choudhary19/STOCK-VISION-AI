import React from 'react'
import { SignUp } from '@clerk/clerk-react'
import { easeInOut, motion } from "motion/react"

const SignUpPage = () => {
  return (
   <main className='flex items-center text-white justify-evenly w-full min-h-screen bg-cover bg-[url(public/img/Banner/banner_bg.jpg)]'>
    <div className=' mb-40'>
        <motion.div
         style={{overflow:'hidden' ,whiteSpace: 'nowrap'}}
         initial={{width:0}}
         animate={{width:"100%"}}
         transition={{duration:4,ease:easeInOut,repeat:Infinity}}
         className="text-4xl font-bold">
          <span>Create Your Stock Vision</span>
          <br />
          <span>Account</span>
        </motion.div>
        <div className="my-8 text-xl font-semibold">
          Join the Trading Community and revolutionize the way you work.
        </div>
        <div>
          <h3 className="my-5">Join the trading community today for free</h3>
          <h3 className="my-5">
            Discover more Connect deeper with online trading experts
          </h3>
          <h3 className="my-5">Your Trading adventure starts here!!!!</h3>
        </div>
      </div>

      
      <div className='flex items-center justify-center w-[300px] p-50 mt-10 mb-20' >
        <SignUp
          signInUrl='/signin'
           forceRedirectUrl={"/"}

         />
      </div>

   </main>
  )
}

export default SignUpPage
