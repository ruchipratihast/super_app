import {  Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import SelectCategory from './pages/SelectCategory';
import HomePage from './pages/HomePage';
import BrowseEntertainmentPage from './pages/BrowseEntertainmentPage';
import DefaultPage from './components/DefaultPage/DefaultPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<DefaultPage/>}/>
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/selectcategory' element={<SelectCategory/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path="/browse" element={<BrowseEntertainmentPage/>}/>
      </Routes>  
    </>
  );
}

export default App;
