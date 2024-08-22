import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInCard from './components/SigninPage/SingInCard';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<SignInCard/>} />
       <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
