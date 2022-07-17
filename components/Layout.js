import React, { Children } from 'react'
import Navbar2 from '../components/Navbar2'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar2 />
      {/* <Navbar /> */}
      {children}
    </div>
  )
}

export default Layout
