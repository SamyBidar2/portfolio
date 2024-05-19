import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import { Footer } from './Components/Footer';
import { Home } from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ='/' element={<Home />} />
        {/* <Route path ="*" element={<Error />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
