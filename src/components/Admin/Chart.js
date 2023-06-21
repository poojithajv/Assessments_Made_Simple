import React, { useRef, useState } from 'react'
import jsPDF from 'jspdf'; 
import emailjs from '@emailjs/browser';

import { useReactToPrint } from "react-to-print";
import { useLocation } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"
function Chart() {
  const detailsPdf = useRef();
    const location=useLocation()
    const [data,setData]=useState(location.state)
    const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
    let pieData
    if (data.aptitude_score!==undefined){
       pieData=[
        {
            name:'Aptitude',
            value:data.aptitude_score
        },
        {
            name:'Technical',
            value:data.technical_score
        }
      ]
    }else{
      pieData=[
        {
            name:'Aptitude',
            value:data.fullstack_java_score
        },
        {
            name:'Technical',
            value:data.fullstack_react_score
        }
    ]
    }

    const generatePdf = useReactToPrint({
      content: () => detailsPdf.current,
      documentTitle: data.Email_Address.slice(0,data.Email_Address.indexOf("@")),
      onAfterPrint: () => alert("pdf downloaded"),
    });
    const sendMail = (item) => {
      var document = new jsPDF("landscape", "px", "a4", false);
      document.rect(20, 20, 600, 400, "D");
      document.setLineWidth(2);
      document.setDrawColor(255, 0, 0);
      document.setFillColor(0, 255, 0);
      document.text(
        60,
        60,
        "TestCompleted: " +
          item.Timestamp +
          "\n" +
          "\n" +
          "Email: " +
          item.Email_Address +
          "\n" +
          "\n" +
          "Score: " +
          item.Score +
          "\n" +
          "\n" +
          "Aptitude Score : " +
          item.aptitude_score +
          "\n" +
          "\n" +
          "Technical Score : " +
          item.technical_score 
      );
  
      const pdfContent = document.output("datauristring");
  
      let message = `Hello ${item.Email_Address} \n \n Here Your result Details \n \n ${pdfContent}`;
  
      emailjs
        .send(
          "service_52vbgo4",
          "template_ibuby0d",
          {
            ...item,
            message:
              message,
          },
          "SzLGLBrz5rRn3ETlY"
        )
        .then((result) => {
          console.log("Email sent successfully:", result.text);
          alert(`Email sent to ${item.Email_Address}`);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    };
    
  return (
    <div style={{padding:'3px'}}>
      <div ref={detailsPdf} style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <div>
        <h1>Student Details:</h1>
        <p>Name : {data.Name}</p>
        <p>Email : {data.Email_Address}</p>
        <p>Score : {data.Score}</p>
        <p>{data.aptitude_score!==undefined ? `Aptitude Score : ${data.aptitude_score}` : `Java Score : ${data.fullstack_java_score}`}</p>
        <p>{data.technical_score!==undefined ? `Technical Score : ${data.technical_score}` : `React Score : ${data.fullstack_react_score}`}</p>
        </div>
      <div >
        <PieChart width={730} height={300}>
          <Pie
            data={pieData}
            color="#000000"
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
          >
            {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
        </div>
      </div>
      <div style={{marginTop:'40px'}}>
      <button type='button' style={{backgroundColor:'orange',color:'white',padding:'10px',border:'none',fontSize:'15px',marginRight:'20px'}} onClick={generatePdf} >
        Download
      </button>
      <button style={{backgroundColor:'blue',color:'white',padding:'10px',border:'none',fontSize:'15px',marginRight:'20px'}} onClick={()=> sendMail(data)}>Send Email</button>
      </div>
      
      </div>
  )
}

export default Chart