import React from 'react'
import Footer from '@/components/footerComponents/Footer'
import Header from '@/components/headerComponents/Header'

const BusinessLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default BusinessLayout