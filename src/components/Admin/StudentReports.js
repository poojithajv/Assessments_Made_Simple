import React,{useState} from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './Tabulation.css'
function StudentReports() {
    const location=useLocation()
    const [search,setSearch]=useState('')
    const [data,setData]=useState(location.state)

    const navigate=useNavigate()

    const handleSearch=(e)=>{
        setSearch(e.target.value)
    }

    const filteredData=data.allData.map(items=>items.filter(i=>i.Email_Address.toLowerCase().includes(search.toLowerCase())))


  return (
    <>
    <div style={{paddingLeft:'30px',paddingTop:'10px',backgroundColor:'#0047AB',color:'white',height:'65px',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
              <div style={{display:'flex',alignItems:'center'}}>
              <p onClick={()=>navigate('/')}style={{fontSize:'20px',marginRight:'30px',fontWeight:'bold'}}>KLOC HIREME </p>
              <p onClick={()=>navigate('/dashboard',{state:data})} style={{fontSize:'18px',marginRight:'20px'}}>Dashboard</p>
              <p onClick={()=>navigate('/sendAssessments',{state:data})}style={{fontSize:'18px',marginRight:'20px'}}>Assessments</p>
              <p onClick={()=>navigate('/testReports',{state:data})} style={{fontSize:'18px',marginRight:'20px'}}>Test Reports</p>
              <p onClick={()=>navigate('/studentReports',{state:data})} style={{fontSize:'18px'}}>Student Reports</p>
              </div>
              <div style={{marginRight:'30px'}}>
                <p style={{color:'white'}} onClick={()=>
                navigate('/adminLogin')}>Sign Out</p>
              </div>
            </div>    
    <div style={{display:'flex',flexDirection:'column',textAlign:'center',paddingTop:'30px',paddingBottom:'20px',minHeight:'100vh'}}>
        <h1 style={{marginBottom:'15px'}}>Student Data</h1>
        <label htmlFor="search">
                Search by Student Email : 
                
        <input id="search" value={search} type="text" onChange={handleSearch} style={{marginBottom:'20px',marginLeft:'20px'}}/>
      </label>
      <div style={{width:'600px',marginLeft:'110px'}}>
        {filteredData.length >0  ? <table border="2px">
            <thead >
                <tr>
                    <th>Id</th>
                    <th>Completed On</th>
                    <th>Name</th>
                    <th>Email Address</th>
                    <th>Phone Number</th>
                    <th>Total Score</th>
                    <th>Aptitude Score</th>
                    <th>Technical Score</th>
                    <th>Java Score</th> 
                    <th>React Score</th>
                    <th>Test Type</th>          
                </tr>
            </thead>
            <tbody>
                {filteredData.map((items,i)=>
                    items.map((item,index)=>
                    <tr key={index}> 
                        <td>{index+1}</td>
                        <td>{item.Timestamp}</td>
                        <td>{item.Name}</td>
                        <td>{item.Email_Address}</td>
                        <td>{item.Phone_Number}</td>
                        <td>{item.Score}</td>
                        <td>{item.aptitude_score===undefined ? 'NA' : item.aptitude_score}</td>
                        <td>{item.technical_score===undefined ? 'NA':item.technical_score}</td>
                        <td>{item.fullstack_java_score===undefined ? 'NA' : item.fullstack_java_score}</td>
                        <td>{item.fullstack_react_score===undefined ? 'NA' :item.fullstack_react_score}</td>
                        <td>{item.testType}</td>
                    </tr>
                )
                )}
            </tbody>
        </table> :'No Data Found'}
        </div>
    </div>
    </>
  )
  
}

export default StudentReports