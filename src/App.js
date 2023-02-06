import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Coffee from './pages/container/Coffee';
import Menu from './pages/detailmain/Menu';
import Main from './pages/Main';
import Join from './pages/member/Join';
import Login from './pages/member/Login';


function App() {
  return (
    <div className="App">  
    <Header/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/Login' element={<Login/>}/> 
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/Coffee' element={<Coffee/>}/> 
        <Route path='/Join' element={<Join/>}/> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
