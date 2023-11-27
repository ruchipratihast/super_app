import {  Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import SelectCategory from './pages/SelectCategory';

function App() {
  return (
    <>
      <Routes>
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/selectcategory' element={<SelectCategory/>} />
      </Routes>  
    </>
  );
}

export default App;
