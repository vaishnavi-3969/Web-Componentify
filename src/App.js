import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import Navbar from './components/navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path = "/" element = {<Homepage/>} exact/>
        </Routes>   
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
