import React, { useState } from 'react'
import './_header.scss';
import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch,  } from 'react-icons/ai';
import { MdNotifications, MdApps } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import { FaBars } from 'react-icons/fa';


const Header = ({handleToggleSidebar}) => {

  const navigate = useNavigate();

  const [input, setInput] = useState('');
const handleSubmit = (e) =>{
  e.preventDefault();
  navigate(`/search/${input}`)
}

const user = useSelector(state => state.auth?.user)
  return (
    <div className='border border-dark header'>



      <FaBars className='header__menu' size={26} onClick={()=> handleToggleSidebar()}/>
      <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"  alt="" className="header__logo" />
      <form onSubmit={handleSubmit}>
        <input type="text"  placeholder='Search' value={input} onChange={e=>setInput(e.target.value)} />
        <button type="submit">
          <AiOutlineSearch size={22}/>
        </button>
      </form>

      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src={user?.photoURL} alt='avatar' />
      </div>
    
    
    
    
    
    
    </div>
  )
}

export default Header
