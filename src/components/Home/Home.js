import React from 'react'
import {useNavigate} from 'react-router-dom'
import './index.css'

function Home() {
  const navigate=useNavigate()
  return (
    <>
        <div className="headerContainer">
              <div className="headerLogoContainer">
              <img src="https://res.cloudinary.com/dufx8zalt/image/upload/v1687419355/logoimage1_krvkbq.png" alt="logo" style={{height:'50px', width:'100px', borderRadius:'10px'}}/>
              </div>
              <div className="headerNavbarContainer">
              <p onClick={()=>navigate('/')} className='headerNavbarLink'>Home</p>
              <p onClick={()=>navigate('/studentLogin')} className='headerNavbarLink'>Student</p>
              <p onClick={()=>navigate('/adminLogin')} className='headerNavbarLink'>Admin</p>
              </div>
              </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'300px'}}>
            KLOC HIREME
        </div>
        </>
  )
}

export default Home