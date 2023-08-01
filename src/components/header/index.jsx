import React from 'react'
import './index.css'
import { useEffect, useState } from 'react'

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="fixed-header">
      { isMobile ? 
       <div className="flex">
       <div className="logo flex">
         <p>R</p>
         <p>A</p>
         <p>R</p>
         <p>A</p>
       </div>
     </div>
      :
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
    }
  </div>
  
  )
}

export default Header
