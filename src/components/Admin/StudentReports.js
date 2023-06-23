import React,{useState} from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './Tabulation.css'
import './index.css'
import {GiHamburgerMenu} from "react-icons/gi"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function StudentReports() {
    const location=useLocation()
    const [search,setSearch]=useState('')
    const [data,setData]=useState(location.state)
    let data1=data.allData.flat()
    const [filterData, setFilterData] = useState(data1);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const navigate=useNavigate()

    const handleSearch=(e)=>{
        setSearch(e.target.value)
    }

    const handleFilter = () => {
      const filtered = data1.filter((item) => {
        const itemDate = new Date(item.Timestamp);
        const start = new Date(startDate);
        const end = new Date(endDate);
        end.setDate(end.getDate() + 1); // Added one day to the end date
        return itemDate >= start && itemDate <= end;
      });
      setFilterData(filtered);
    };
    const filteredData=filterData.filter(i=>i.Email_Address.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
    <div className="admin-header-container">
      <div className="admin-header-logo-container">
              <img src="https://res.cloudinary.com/dufx8zalt/image/upload/v1687419355/logoimage1_krvkbq.png" alt="logo" style={{height:'50px', width:'100px', borderRadius:'10px'}} onClick={()=>navigate('/')}/>
              </div>
              <div className="admin-desktop-header-navbar-container">
              <p onClick={()=>navigate('/dashboard',{state:data})} className="admin-header-navbar-link">Dashboard</p>
              <p onClick={()=>navigate('/sendAssessments',{state:data})} className="admin-header-navbar-link">Assessments</p>
              <p onClick={()=>navigate('/testReports',{state:data})} className="admin-header-navbar-link">Test Reports</p>
              <p onClick={()=>navigate('/studentReports',{state:data})} className="admin-header-navbar-link">Student Reports</p>
              <p className="admin-header-login" onClick={()=> navigate('/adminLogin')}>Admin</p>
                </div>
                <div className="admin-mobile-header-navbar-container">
                <Popup trigger={<button  className="admin-hamburger-btn"><GiHamburgerMenu /></button>} position="bottom" >
              <div className="admin-mobile-hamburger-menu-container">
              <ul className="admin mobile-hamburger-menu">
                <li onClick={()=>navigate('/dashboard',{state:data})} className='admin-header-navbar-link'>Dashboard</li>
                <li onClick={()=>navigate('/sendAssessments',{state:data})} className='admin-header-navbar-link'>Assessments</li>
                <li onClick={()=>navigate('/testReports',{state:data})} className='admin-header-navbar-link'>Test Resports</li>
                <li onClick={()=>navigate('/studentReports',{state:data})} className='admin-header-navbar-link'>Student Resports</li>
                <li onClick={()=> navigate('/adminLogin')} className="admin-header-login">Admin</li>
                </ul>
                </div>
  </Popup>
                </div>
        </div> 
    <div style={{display:'flex',flexDirection:'column',textAlign:'center',paddingTop:'30px',paddingBottom:'20px',minHeight:'100vh'}}>
        <h1 style={{marginBottom:'15px'}}>Student Data</h1>
        <label htmlFor="search">
                Search by Student Email : 
                
        <input id="search" value={search} type="text" onChange={handleSearch} style={{marginBottom:'20px',marginLeft:'20px'}}/>
      </label>
      <div>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:'20px'}}>
          <div className='display-between'>
            Start Date:{"   "}
            <input
              type='date'
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              style={{marginLeft:'10px'}}
            />
          </div>
          <div style={{marginLeft:'10px'}}>
            End Date:{" "}
            <input
              type='date'
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              style={{marginLeft:'10px'}}
            />
          </div>
          <button style={{marginLeft:'20px',padding:'2px',width:'60px'}} onClick={handleFilter}>Filter</button>
        </div>
      </div>
      <div style={{width:'800px',marginLeft:'40px'}}>
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
                    <th>Reasoning Score</th>
                    <th>Test Type</th>   
                    <th>View Score</th>       
                </tr>
            </thead>
            <tbody>
                {filteredData.map((item,index)=>
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
                        <td>{item.reasoning_score===undefined ? 'NA' : item.reasoning_score}</td>
                        <td>{item.testType}</td>
                        <td>
                            <button onClick={()=>navigate('/studentChart',{state:item})} >
                                View
                            </button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table> :'No Data Found'}
        </div>
    </div>
    </>
  )
  
}

export default StudentReports