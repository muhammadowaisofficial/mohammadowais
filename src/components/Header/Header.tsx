import React from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
        <Topbar />
        <Navbar />
    </header>
  )
}

export default Header