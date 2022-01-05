import React from 'react'

import { useRouter } from 'next/router'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  
  
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main className='bg-th-background'>
        {children}
      </main>
      
      <Footer />
    </div>
  )
}