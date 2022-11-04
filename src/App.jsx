import React from 'react';
import Navbar from "./Components/Navbar/index";
import Home from "./Components/Home/index";
import Footer from "./Components/Footer/index";
import Repositories from "./Components/Repositories/index"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    <body>

      
      <header>
        <Navbar />
      </header>

      <main>
        <BrowserRouter>
          <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/repos' element={<Repositories />}/>
          </Routes>
        </BrowserRouter>
      </main>

      <footer>
        <Footer />
      </footer>




    </body></>
  );
};

export default App;