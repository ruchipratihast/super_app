import {  Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import SelectCategory from './pages/SelectCategory';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/selectcategory' element={<SelectCategory/>} />
        <Route path='/home' element={<HomePage/>} />
      </Routes>  
    </>
  );
}

export default App;
