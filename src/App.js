import {  Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/register' element={<RegisterPage/>} />
      </Routes> 
      <Routes>
        <Route path='/selectcategory' element={<HomePage/>} />
      </Routes>
    </>
  );
}

export default App;
