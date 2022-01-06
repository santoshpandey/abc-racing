import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  
  
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main className='bg-th-background' role="main">
        {children}
      </main>
      
      <Footer />
    </div>
  )
}