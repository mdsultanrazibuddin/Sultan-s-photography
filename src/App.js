

import './App.css';

import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
import Service from './Components/Services/Service';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Components/Register/Register'


function App() {
  return (
    <div className="App">
       <Header/>
       <Routes>
     <Route path="/" element={ <Home/>} />
     <Route path="service" element={ <Service/>} />
     <Route path="Banner" element={ <Banner/>} />
     
     <Route path="Blogs" element={<Blogs/>} />
     <Route path="about" element={<About/>} />
     <Route path="Register" element={<Register/>} />
     
    
     
     <Route path="*" element={<NotFound/>} />
     </Routes>
     <Footer/>

    </div>
  );
}

export default App;
