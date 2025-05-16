import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import { useUser } from '@clerk/clerk-react';  // Import useUser hook from Clerk

const SignInPage = () => {
    const { user } = useUser(); // Get the current logged-in user
    const redirectUrl = user && user.email === 'ai.stockvision@gmail.com' ? '/admin' : '/';
  
  return (

    <main
      className="flex items-center justify-center w-full min-h-screen bg-cover"
      style={{ backgroundImage: "url(public/img/Banner/banner_bg.jpg)" }}
    >
      <SignIn
        // signUpUrl="/signup"
        forceRedirectUrl={redirectUrl}  // Redirect based on email condition
        // forceRedirectUrl={'ai.stockvision@gmail.com' === 'ai.stockvision@gmail.com' ? '/admin' : '/'}
      />
    </main>
  );
};

export default SignInPage;
