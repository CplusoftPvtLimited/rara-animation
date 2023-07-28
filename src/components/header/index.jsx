import React from 'react'
import './index.css'

function Header() {
  return (
    <div className="fixed-header">
    <div className="header-content flex justify-between">
      <p className="reserves">© Ritsumeikan Univ. All rights reserved.</p>
      <div className="logo flex">
        <p>R</p>
        <p>A</p>
        <p>R</p>
        <p>A</p>
      </div>
      <div>
        <p>MENU</p>
      </div>
    </div>
  </div>
  
  )
}

export default Header
