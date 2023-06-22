import React, { useEffect,useState } from "react";
import Navbar from "./Navbar";
// import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"
import { useNavigate ,useLocation} from "react-router-dom";
import { Chart } from "react-google-charts";
import Cookies from "js-cookie";

const Dashboard = () => {
  const location=useLocation()
  const navigate = useNavigate();
  const [finalData,setFinalData]=useState(location.state)

  const data=finalData.datat
  // const TotalDataLength=data.freshersJuniorData.length+data.fresherData.length+data.pythonData.length+
  // data.mernDeveloperIntermediateData.length+data.shopifyData.length+data.frontEndFresherData.length+
  // data.fullStackData.length+data.javaData.length+data.mernDeveloperJuniorData.length+data.qaData.length
  const fresher=data.fresherData.length
  console.log(fresher)
  const freshersJunior=data.freshersJuniorData.length
  console.log(freshersJunior)
  const python=data.pythonData.length
  const frontendfresher=data.frontEndFresherData.length
  const qa=data.qaData.length
  const merndeveloperintermediate=data.mernDeveloperIntermediateData.length
  const merndeveloperjunior=data.mernDeveloperJuniorData.length
  const shopify=data.shopifyData.length
  const fullStack=data.fullStackData.length
  const java=data.javaData.length
  // const Colors = ["#b272f7","#f255f0","#6bd3ed","#7af0a1","#ed8d39","#b0f222","#f75475","#ed55ed","#d383f7","#67a697" ]
  // const pieData=[
  //     ["Language", "Speakers (in millions)"],
  //     ["FreshersJuniorTest",1]
  //     ["FreshersTest",2],
  //     // ['Python Test',Math.round(data.pythonData.length/TotalDataLength*100*100)/100],
  //     // ['Shopify Test',Math.round(data.shopifyData.length/TotalDataLength*100*100)/100],
  //     // ['Full Stack Test',Math.round(data.fullStackData.length/TotalDataLength*100*100)/100],
  //     // ['Front End Fresher Test',Math.round(data.frontEndFresherData.length/TotalDataLength*100*100)/100]
  //     // ['Java Test',Math.round(data.javaData.length/TotalDataLength*100*100)/100],
  //     // ['MERN Developer Junior Test',Math.round(data.mernDeveloperJuniorData.length/TotalDataLength*100*100)/100],
  //     // ['MERN Developer Intermediate Test',Math.round(data.mernDeveloperIntermediateData.length/TotalDataLength*100*100)/100],
  //     // ['QA Test',Math.round(data.qaData.length/TotalDataLength*100*100)/100]
  // ]

  const pieData=[
    ["Language", "Speakers (in millions)"],
    ['Fresher_Junior_Test',freshersJunior],
    ['Freshers_Test',fresher],
    ['Python_Test',python],
    ['Front_End_Fresher_Test',frontendfresher],
    ['QA_Test',qa],
    ['Full_Stack_Test',fullStack],
    ['Java_Test',java],
    ['Mern_Developer_Intermediate_Test',merndeveloperintermediate],
    ['Mern_Developer_Junior_Test',merndeveloperjunior],
    ['Shopify_Test',shopify]
  ]
      let aptitude_score  = 0 
      let technical_score = 0 
      let aptitude_percentage=0
      let technical_percentage=0

    data.fresherData.map((item,index)=>{
     aptitude_score+=item.aptitude_score
     technical_score+=item.technical_score
   })
   aptitude_percentage=aptitude_score/data.fresherData.length/ process.env.REACT_APP_FRESHER_TEST_APTITUDE_QUESTIONS*100
   technical_percentage=technical_score/(data.fresherData.length*process.env.REACT_APP_FRESHER_TEST_TECHNICAL_QUESTIONS)*100
  
   let python_aptitude_score=0
   let python_technical_score=0
   let python_aptitude_percentage=0
   let python_technical_percentage=0
    data.pythonData.map((item,index)=>{
        python_aptitude_score+=item.aptitude_score
        python_technical_score+=item.technical_score
    })
    python_aptitude_percentage=python_aptitude_score/data.pythonData.length/process.env.REACT_APP_PYTHON_TEST_APTITUDE_QUESTIONS*100
    python_technical_percentage=python_technical_score/data.pythonData.length/process.env.REACT_APP_PYTHON_TEST_TECHNICAL_QUESTIONS*100

    
    let shopify_aptitude_score=0
    let shopify_technical_score=0
    let shopify_aptitude_percentage=0
    let shopify_technical_percentage=0
    data.shopifyData.map((item,index)=>{
      shopify_aptitude_score+=item.aptitude_score
      shopify_technical_score+=item.technical_score
    })
    console.log(shopify_technical_score)
    shopify_aptitude_percentage=shopify_aptitude_score/data.shopifyData.length/process.env.REACT_APP_SHOPIFY_TEST_APTITUDE_QUESTIONS*100
    shopify_technical_percentage=shopify_technical_score/data.shopifyData.length/process.env.REACT_APP_SHOPIFY_TEST_TECHNICAL_QUESTIONS*100

    let fullStack_java_score=0
    let fullStack_react_score=0
    let fullStack_java_percentage=0
    let fullStack_react_percentage=0
    data.fullStackData.map((item,index)=>{
      fullStack_java_score+=item.fullstack_java_score
      fullStack_react_score+=item.fullstack_react_score
    })

    fullStack_java_percentage=fullStack_java_score/data.fullStackData.length/process.env.REACT_APP_FULL_STACK_TEST_JAVA_QUESTIONS*100
    fullStack_react_percentage=fullStack_react_score/data.fullStackData.length/process.env.REACT_APP_FULL_STACK_TEST_REACT_QUESTIONS*100
  const fresherPieData=[
    ["Language", "Speakers (in millions)"],
    ['FreshersAptitude',aptitude_percentage],
    ["FreshersTechnical",technical_percentage]
  ]

  const pythonPieData=[
    ["Language", "Speakers (in millions)"],
    ['PythonAptitude',python_aptitude_percentage],
    ['PythonTechnical',python_technical_percentage]
  ]

  const shopifyPieData=[
    ["Language", "Speakers (in millions)"],
    ['ShopifyAptitude',shopify_aptitude_percentage],
    ['ShopifyTechnical',shopify_technical_percentage]
  ]

  const fullStackPieData=[
    ["Language", "Speakers (in millions)"],
    ['FullStackJava',fullStack_java_percentage],
    ['FullStackReact',fullStack_react_percentage]
  ]

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/notFound");
    }
  }, []);
  const options = {
    legend: "none",
    pieStartAngle: 100,
  };
  return (
    <div>
      <div style={{paddingLeft:'30px',paddingTop:'10px',backgroundColor:'#0047AB',color:'white',height:'65px',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
              <div style={{display:'flex',alignItems:'center'}}>
              <p onClick={()=>navigate('/')}style={{fontSize:'20px',marginRight:'30px',fontWeight:'bold'}}>ASSESSMENTS MADE SIMPLE </p>
              <p onClick={()=>navigate('/dashboard',{state:finalData})} style={{fontSize:'18px',marginRight:'20px'}}>Dashboard</p>
              <p onClick={()=>navigate('/sendAssessments',{state:finalData})}style={{fontSize:'18px',marginRight:'20px'}}>Assessments</p>
              <p onClick={()=>navigate('/testReports',{state:finalData})} style={{fontSize:'18px',marginRight:'20px'}}>Test Reports</p>
              <p onClick={()=>navigate('/studentReports',{state:finalData})} style={{fontSize:'18px'}}>Student Reports</p>
              </div>
              <div style={{marginRight:'30px'}}>
                <p style={{color:'white'}} onClick={()=>
                navigate('/adminLogin')}>Admin</p>
              </div>
        </div>
      <div >
        <Chart
        chartType="PieChart"
        data={pieData}
        options={options}
        width={"100%"}
        height={"500px"}
      />
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
        <Chart
        chartType="PieChart"
        data={fresherPieData}
        options={options}
        width={"100%"}
        height={"500px"}
      />
      <Chart
        chartType="PieChart"
        data={pythonPieData}
        options={options}
        width={"100%"}
        height={"500px"}
      />
      <Chart
        chartType="PieChart"
        data={shopifyPieData}
        options={options}
        width={"100%"}
        height={"500px"}
      />
      <Chart
        chartType="PieChart"
        data={fullStackPieData}
        options={options}
        width={"100%"}
        height={"500px"}
      />
        </div>
    </div>
  );
};

export default Dashboard;
