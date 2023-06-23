import React, { useEffect,useState } from "react";
import Navbar from "./Navbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { gapi } from "gapi-script";
import {useLocation} from 'react-router-dom'
import Cookies from "js-cookie";
import {GiHamburgerMenu} from "react-icons/gi"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const TestReports = () => {
  const location=useLocation()
    const [data,setData]=useState(location.state)
  const navigate = useNavigate();
  const testDetails = [
    {
      name: "Fresher QA Test",
      id: "fresher_qa_test",
      url: "https://www.fitaacademy.in/includes/assets/img/blog/software-testing.jpg",
      data:data.datat.qaData
    },
    {
      name: "Full Stack Developer Test",
      id: "fullstack_developer_test",
      url: "https://assets.website-files.com/6239c24c282f5581285fbbb3/6357613e0b897b701b563c7a_full%20stack%20developer%20assessment%20test.jpg",
      data:data.datat.fullStackData
    },
    {
      name: "Fresher Python Test",
      id: "fresher_python_test",
      url: "https://st3.myideasoft.com/idea/ct/82/myassets/blogs/python-ne-icin-kullanilir.jpg",
      data:data.datat.pythonData
    },
    {
      name: "Fresher Java Test",
      id: "fresher_java_test",
      url: "https://i0.wp.com/www.techbooky.com/wp-content/uploads/2019/10/java-logo.png",
      data:data.datat.javaData
    },
    {
      name: "Fresher Test",
      id: "fresher_test",
      url: "https://img.freepik.com/premium-vector/man-with-laptop-studying-working-concept_113065-167.jpg",
      data:data.datat.fresherData
    },
    {
      name: "Frontend Freshers Assessment",
      id: "frontend_fresher_test",
      url: "https://staticlearn.shine.com/l/m/images/blog/Front--end-developer.png",
      data:data.datat.frontEndFresherData
    },
    {
      name: "Shopify Developer Test",
      id: "shopify_developer_test",
      url: "https://colorlib.com/wp/wp-content/uploads/sites/2/free-shopify-themes.jpg",
      data:data.datat.shopifyData
    },
    {
      name: "MERN Developer - Junior",
      id: "mern_developer_junior",
      url: "https://www.technology4u.in/wp-content/uploads/2021/07/epv55hgtsfi8csprpj9u.jpg",
      data:data.datat.mernDeveloperJuniorData
    },
    {
      name: "MERN Developer - Intermediate",
      id: "mern_developer_intermediate",
      url: "https://www.bigscal.com/wp-content/uploads/2022/09/Features-of-Mern-stack-development-services-You-Should-Know.png",
      data:data.datat.mernDeveloperIntermediateData
    },
    {
      name:'Freshers Junior',
      id:"freshers_junior_test",
      url:'https://play-lh.googleusercontent.com/8HEJdrLd48HwrAzlRva8xjG1wxCuu0VUd9ML6ySw76q-lBD0AeWofbNZqYPrjWSCgf8=w240-h480-rw',
      data:data.datat.freshersJuniorData
    }
  ];

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/notFound");
    }
  }, []);

  return (
    <div>
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
      <div>
        <h1>Test Reports</h1>
        <div className='test-container'>
          {testDetails.map((each, index) => {
            return (
              <Card sx={{ width: 345, margin: "20px" }} key={index}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    height='140'
                    image={each.url}
                    alt='green iguana'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      {each.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Button
                  sx={{ margin: "20px" }}
                  variant='contained'
                  onClick={() =>
                    navigate(`/testReports/${each.id}`, { state: each.data })
                  }
                >
                  View
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestReports;
