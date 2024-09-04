import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInCard from './components/SigninPage/SingInCard';
import DashboardPage from './pages/dashBoard/dashboradPage';
import Employee from './pages/employee/employeeroot/employeePage';
import EmployeAttenList from './pages/employattendanceListPage/employeAttenList';
import AddEmploye from './pages/employee/addEmployee/addEmploye';
import Attendance from './pages/attendance/attendanceroot/attendance';
import LeaveRequest from './pages/attendance/leaveRequest/leavepage';
import Layout from './components/layout/layout';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
   <Layout> </Layout>
    <Routes>
       <Route path='/' element={<SignInCard/>} />
       <Route path='/dashboard' element={<DashboardPage/>} />
       <Route path='/employee' exact element={<Employee/>}>
              <Route path='employeelist'exact element={<EmployeAttenList/>}/>
              <Route path='addemployee' exact element={<AddEmploye/>}/>
        </Route>
      <Route path='/attendance' exact element={<Attendance/>}>
              <Route path='leaverequest'exact element={<LeaveRequest/>}/>
              <Route path='attendancelist' exact element={<EmployeAttenList/>}/>
              <Route path='addemployee'exact element={<AddEmploye/>}/>
        </Route> 
      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
