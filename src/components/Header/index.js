import React from 'react'
import { FiLogIn } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'
import Logo from '../../assets/logo.svg'
import Profile from '../../components/Profile'
import './index.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <Profile />
        <div className="icons">
          <AiOutlineUser />
          <FiLogIn />
        </div>
      </div>
    </div>
  )
}

export default Header
