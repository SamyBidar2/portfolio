import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import { Footer } from './Components/Footer';
import { Navlinks } from './Components/Navlink';
import { Home } from './Pages/Home';
import { Error } from './Pages/Error';
import { AllProjects } from './Pages/Allprojects';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
// import { Lateral } from './Components/Lateral';



function App() {
  return (
    <BrowserRouter>
      <Navlinks/>
      {/* <Navlinks2/> */}
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/Allprojects' element={<AllProjects />} />
        <Route path ="*" element={<Error />} />
      </Routes>
      {/* <Lateral/> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
