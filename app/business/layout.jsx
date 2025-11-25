import Header from '@/components/headerComponents/Header'
import React from 'react'

const BusinessLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}

export default BusinessLayout