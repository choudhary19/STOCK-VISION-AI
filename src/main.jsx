import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import {dark ,shadesOfPurple } from '@clerk/themes';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('There is no APi key')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ClerkProvider appearance={{
    layout:{
      unsafe_disableDevelopmentModeWarnings: true,
    },
    baseTheme:[dark, ], variables:{colorPrimary:'#FFA500' ,colorText:'white'}} }  publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <App />
  </ClerkProvider>
</React.StrictMode>,
)
