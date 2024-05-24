import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import { Footer } from './Components/Footer';
import { Navlinks } from './Components/Navlinks';
// import { Navlinks2 } from './Components/Navlinks2';
import { Home } from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Navlinks/>
      {/* <Navlinks2/> */}
      <Routes>
        <Route path ='/' element={<Home />} />
        {/* <Route path ="*" element={<Error />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
