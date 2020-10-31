import React from 'react';
import './index.css';
import perfil from '../../assets/perfil.jpeg'

const Profile = () => {
    return(
        <div className='Profile'>
            <p> @traineeCJR </p>
            <img src={perfil} alt='profile'/>
        </div>
    )
}
export default Profile;