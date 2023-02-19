import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Header from './Components/header/Header';
import HomeScreen from './Screen/HomeScreen/HomeScreen';
import Letting from './Screen/Letting/Letting';
import Login from './Screen/Login/Login';
import Register from './Screen/Register/Register';

function App() {
  return (
    <BrowserRouter>
    
      <Header/>
      {/* <HomeScreen/> */}
      <Routes>
        <Route path='/' element={<HomeScreen />}/>
        <Route path='login' element={<Login />}/>
        <Route path='letting' element={<Letting />}/>
        
        <Route path='login/register' element={<Register />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
