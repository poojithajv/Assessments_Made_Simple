import React, { useState, useEffect } from "react";
import EachCandidateInputField from "./EachCandidateInputField";
import uniqueRandom from "unique-random";
import emailjs from "@emailjs/browser";
import "./index.css";
import Navbar from "./Navbar";
import Cookies from "js-cookie";
import { useLoaderData, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Alert } from "@mui/material";
import {useLocation} from 'react-router-dom'
import {GiHamburgerMenu} from "react-icons/gi"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Assessment = () => {
  const [activeTest, setActiveTest] = useState("");
  const [studentCount, setStudentCount] = useState(1);
  const [proceeding, setProceeding] = useState(false);
  const [proceedingStatus, setProceedingStatus] = useState(false);
  const [candidateFields, setCandidateFields] = useState([]);
  const [open, setOpen] = useState(false);
  const location=useLocation()
  const [finalData,setFinalData]=useState(location.state)
  const tests = [
    "Freshers Junior Test",
    "Fresher Test",
    "Freshers QA Test",
    "Full Stack Developer Test",
    "Freshers Python Test",
    "Freshers Java Test",
    "Frontend Freshers Test",
    "Shopify Developer Test",
    "MERN Developer Junior Test",
    "MERN Developer Intermediate Test",
  ];
  const isEmptyField = candidateFields.some((each) =>
    Object.values(each).some((value) => value === "")
  );
  const handleClickOpen = () => {
    if (!isEmptyField) {
      setOpen(true);
    }
    if (isEmptyField) {
      alert("Please fill in all the candidate details");
      return;
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/notFound");
    }
    setStudentCount(1);
    setProceeding(false);
  }, [activeTest]);
  const handleInputChange = (index, values) => {
    setCandidateFields((prevCandidateFields) => {
      const updatedFields = [...prevCandidateFields];
      updatedFields[index] = { ...updatedFields[index], ...values };
      return updatedFields;
    });
  };
  const onClickProceed = () => {
    if (activeTest === "") {
      alert("Select Test");
    } else {
      setProceeding(true);
      setProceedingStatus(true)
      setCandidateFields(Array.from({ length: studentCount }, () => ({})));
    }
  };
  const sendingMailThroughEmailJs = (student) => {
    console.log(student);
    emailjs
      .send(
        "service_okvqzif",
        "template_3ujjkix",
        {
          to_name: student.name,
          from_name: "kloc",
          message: `You have been invited to write ${student.test}. \n Your login email is ${student.email} and Test pin in ${student.uniqueId}. \n Test Link : http://localhost:3000/studentLogin`,
          to_email: student.email,
        },
        "MkG09aTM7gyK7zTog"
      )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        alert(`Email sent to ${student.email}`);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  const updateStudentThroughSheetDb = (student) => {
    console.log(activeTest);
    const random = uniqueRandom(10000, 100000);
    const details = {
      name: student.name,
      email: student.email,
      test: activeTest,
      phoneNo: student.phone,
      endDate: student.endDate,
      uniqueId: "kloc" + random(),
      isCompleted: "incomplete",
    };
    console.log(details, "gh");
    fetch("https://sheetdb.io/api/v1/qeetqgie30fhh", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer n95196updlz3oo643ihw1vmttqaq81atj4mfk7qq",
      },
      body: JSON.stringify(details),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    // sendingMailThroughEmailJs(details);
  };
  const onClickSendAssessment = () => {
    console.log("triggered");
    // Check if any of the candidate input fields are empty
    candidateFields.forEach((each) => {
      updateStudentThroughSheetDb(each);
      sendingMailThroughEmailJs(each);
    });
    handleClose();
    setProceeding(false);
    setProceedingStatus(false)
  };
  return (
    <div style={{width:'100%', height:'100%'}}>
      <div className="admin-header-container">
      <div className="admin-header-logo-container">
              <img src="https://res.cloudinary.com/dufx8zalt/image/upload/v1687419355/logoimage1_krvkbq.png" alt="logo" style={{height:'50px', width:'100px', borderRadius:'10px'}} onClick={()=>navigate('/')}/>
              </div>
              <div className="admin-desktop-header-navbar-container">
              <p onClick={()=>navigate('/dashboard',{state:finalData})} className="admin-header-navbar-link">Dashboard</p>
              <p onClick={()=>navigate('/sendAssessments',{state:finalData})} className="admin-header-navbar-link">Assessments</p>
              <p onClick={()=>navigate('/testReports',{state:finalData})} className="admin-header-navbar-link">Test Reports</p>
              <p onClick={()=>navigate('/studentReports',{state:finalData})} className="admin-header-navbar-link">Student Reports</p>
              <p className="admin-header-login" onClick={()=> navigate('/adminLogin')}>Admin</p>
                </div>
                <div className="admin-mobile-header-navbar-container">
                <Popup trigger={<button  className="admin-hamburger-btn"><GiHamburgerMenu /></button>} position="bottom" >
              <div className="admin-mobile-hamburger-menu-container">
              <ul className="admin mobile-hamburger-menu">
                <li onClick={()=>navigate('/dashboard',{state:finalData})} className='admin-header-navbar-link'>Dashboard</li>
                <li onClick={()=>navigate('/sendAssessments',{state:finalData})} className='admin-header-navbar-link'>Assessments</li>
                <li onClick={()=>navigate('/testReports',{state:finalData})} className='admin-header-navbar-link'>Test Resports</li>
                <li onClick={()=>navigate('/studentReports',{state:finalData})} className='admin-header-navbar-link'>Student Resports</li>
                <li onClick={()=> navigate('/adminLogin')} className="admin-header-login">Admin</li>
                </ul>
                </div>
  </Popup>
                </div>
        </div>
        <div className="assessment-container">
          <div className="each-assessment-container">
            {tests.map((each, index) => (
              <div key={index} className="input-container">
                <div className="assessmentContainerCheckboxContainer">
                  <input
                    type="radio"
                    name="test"
                    id={index}
                    onChange={(e) => setActiveTest(e.target.value)}
                    value={each}
                    className='assessmentContainerCheckbox'
                  />
                  <label htmlFor={index} className='assessmentContainerCheckboxLabel'>{each}</label>
                </div>
                <input
                  disabled={activeTest !== each}
                  type="number"
                  className="assessmentContainerInput"
                  id={index}
                  onChange={(e) => setStudentCount(e.target.value)}
                  value={activeTest === each ? studentCount : ""}
                />
              </div>
            ))}
          </div>
          <Button
            variant="contained"
            className="assessment-button m-3"
            onClick={onClickProceed}
          >
            Proceed
          </Button>
        </div>
        {proceedingStatus ? <div className="each-input-student-details-div">
          {proceeding &&
            Array.from({ length: studentCount }, (_, index) => (
              <EachCandidateInputField
                key={index}
                index={index} // Pass the index as a prop
                onInputChange={(values) => handleInputChange(index, values)}
              />
            ))}
          {proceeding && (
            <div className="text-center">
              <Button variant="contained" onClick={handleClickOpen}>
                Send Assessment
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Are You Sure You Want To Send?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Let's Check onces before sending the assessment !
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Disagree</Button>
                  <Button onClick={onClickSendAssessment} autoFocus>
                    Agree
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          )}
        </div> : ""
}
    </div>
  );
};
export default Assessment;