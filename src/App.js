import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='righteous-text'>
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
