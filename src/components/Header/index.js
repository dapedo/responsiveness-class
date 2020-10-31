import React from 'react';
import {FiLogIn} from 'react-icons/fi';
import {AiOutlineUser} from 'react-icons/ai';
import Logo from '../../assets/logo.svg'
import './index.css';

const Header = () => {
    return(
        <div className = 'Header'>
            <div className = 'logo'>
                <img src={Logo} alt='logo' />
            </div>
            <div className = 'icons'>
                <AiOutlineUser/>
                <FiLogIn/>
            </div>
        </div>
    )

}

export default Header;