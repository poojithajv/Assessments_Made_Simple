import React from 'react'
import {useNavigate} from 'react-router-dom'
function Home() {
  const navigate=useNavigate()
  return (
    <>
        <div style={{backgroundColor:'#1d1a69',color:'white',height:'60px',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center', paddingRight:'15px', paddingLeft:'15px'}}>
              <div style={{display:'flex',alignItems:'center'}}>
              <img src="https://res.cloudinary.com/dufx8zalt/image/upload/v1687419355/logoimage1_krvkbq.png" alt="logo" style={{height:'50px', width:'100px', borderRadius:'10px'}}/>
              </div>
              <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
              <p onClick={()=>navigate('/')} style={{fontSize:'18px',marginRight:'20px'}}>Home</p>
              <p onClick={()=>navigate('/studentLogin')}style={{fontSize:'18px',marginRight:'20px'}}>Student</p>
              <p onClick={()=>navigate('/adminLogin')} style={{fontSize:'18px',marginRight:'20px'}}>Admin</p>
              </div>
              </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'300px'}}>
            KLOC HIREME
        </div>
        </>
  )
}

export default Home