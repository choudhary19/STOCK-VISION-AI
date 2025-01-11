import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpPage from './Sign-Up';
import SignInPage from './Sign-In';
import './index.css';
import HomePage from './home_page';
import TradePage from './Trade';
import PricePage from './pricing';
import MarketPage from './Market/Index';
import { RedirectToSignIn, SignedIn, SignedOut, useAuth } from '@clerk/clerk-react';

const ProtectedRoute = ({ children }) => {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <SignInPage />;
  }

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path='/markets' element={<MarketPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />

        
        {/* Protected Routes */}
        <Route
          path="/trade"
          element={
            <ProtectedRoute>
              <TradePage />
            </ProtectedRoute>
          }
        />

        <Route
         path='/pricing'
         element={
           <ProtectedRoute>
            <PricePage />
           </ProtectedRoute>
         }
        
        />

        {/* Sign-Up Page */}
        <Route
          path="/signup"
          element={
            <SignedOut>
              <SignUpPage redirectUrl="/" />
            </SignedOut>
          }
        />

        {/* Sign-In Page */}
        <Route
          path="/signin"
          element={
            <SignedOut>
              <SignInPage redirectUrl="/" />
            </SignedOut>
          }
        />

        {/* Default Fallback */}
        <Route
          path="*"
          element={
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
