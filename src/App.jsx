import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import { Footer } from './Components/Footer';
import { Navlinks } from './Components/Navlink';
import { Home } from './Pages/Home';
import { Error } from './Pages/Error';
import { AllProjects } from './Pages/Allprojects';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';




function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Navlinks/>
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/Allprojects' element={<AllProjects />} />
        <Route path ="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
