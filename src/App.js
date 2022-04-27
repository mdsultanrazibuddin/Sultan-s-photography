

import './App.css';

import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';


import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import Service from './Components/Service/Service';





function App() {
  return (
    <div className="App">
       <Header/>
       
       <Routes>
     <Route path="/" element={ <Home/>} />
     <Route path="service" element={
       
         <Service/>
       
     } />
    
     
     <Route path="Blogs" element={<Blogs/>} />
     <Route path="about" element={<About/>} />
     <Route path="SignUp" element={<SignUp/>} />
     <Route path="Login" element={<Login/>} />
     
    
     
     <Route path="*" element={<NotFound/>} />
     </Routes>
     <Footer/>

    </div>
  );
}

export default App;
