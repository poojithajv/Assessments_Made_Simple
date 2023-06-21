import React, { useState } from "react";
import TestContext from "./TestContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/Admin/AdminLogin";
import TestReports from "./components/Admin/TestReports";
import SendAssessments from "./components/Admin/SendAssessments";
import Dashboard from "./components/Admin/Dashboard";
import StudentLogin from "./components/Student/StudentLogin";
import Home from './components/Home/Home'
import ShopifyTest from './components/Admin/Tests/ShopifyTest'
import FreshersTest from './components/Admin/Tests/FreshersTest'
import FullStackTest from './components/Admin/Tests/FullStackTest'
import PythonTest from './components/Admin/Tests/PythonTest'
import JavaTest from './components/Admin/Tests/JavaTest'
import FrontEndFresherTest from './components/Admin/Tests/FrontEndFresherTest'
import MernDeveloperJuniorTest from './components/Admin/Tests/MernDeveloperJuniorTest'
import MernDeveloperIntermediateTest from './components/Admin/Tests/MernDeveloperIntermediateTest'
import QATest from './components/Admin/Tests/QATest'
import NotFound from "./components/Admin/NotFound";
import StudentReports from "./components/Admin/StudentReports";
import Chart from './components/Admin/Chart'

const App = () => {
  const [reports, setReports] = useState([]);

  const addToReports = (item) => {
    setReports(item);
  };

  return (
    <TestContext.Provider value={{ reports, addToReports }}>
      <BrowserRouter>
        <Routes>
          {/* Home component */}
          <Route path='/' element={<Home />} />
          {/* admin components */}
          <Route path='/adminLogin' element={<AdminLogin />} />
          <Route path='/testReports' element={<TestReports />} />
          <Route path='/studentReports' element={<StudentReports />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/sendAssessments' element={<SendAssessments />} />

          {/* student components */}
          <Route path='/studentLogin' element={<StudentLogin />} />

          {/* test navigation */}
          <Route path='testReports/fresher_test' element={<FreshersTest />} />
          <Route path='testReports/fresher_qa_test' element={<QATest />} />
          <Route path='testReports/fullstack_developer_test' element={<FullStackTest />} />
          <Route path='testReports/fresher_python_test' element={<PythonTest />} />
          <Route path='testReports/fresher_java_test' element={<JavaTest />} />
          <Route
            path='testReports/frontend_fresher_test'
            element={<FrontEndFresherTest />}
          />
          <Route path='testReports/shopify_developer_test' element={<ShopifyTest />} />
          <Route
            path='testReports/mern_developer_junior'
            element={<MernDeveloperJuniorTest />}
          />
          <Route
            path='testReports/mern_developer_intermediate'
            element={<MernDeveloperIntermediateTest />}
          />
          <Route path='/notFound' element={<NotFound />} />
          {/* Chart */}
          <Route path='/studentChart' element={<Chart />} />
        </Routes>
      </BrowserRouter>
    </TestContext.Provider>
  );
};

export default App;
