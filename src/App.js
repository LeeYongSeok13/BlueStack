import React from 'react';
import './App.css';
import Wrapper from './component/Wrapper';
import Header from './component/Header';
import Main from './pages/Main';
import Characteristic from './pages/Characteristic';
import Control from './component/Control';
import Multi from './component/Multi';
import Macro from './component/Macro';
import Reset from './component/Reset';
import Game from './pages/Game';
import Footer from './component/Footer';
import { Route, Routes } from 'react-router-dom';


function App() {


  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/BlueStack' element={<Main />} />
        <Route path='/BlueStack/Characteristic' element={<Characteristic />} />
        <Route path='/BlueStack/Characteristic/Control' element={<Control />} />
        <Route path='/BlueStack/Characteristic/Multi' element={<Multi />} />
        <Route path='/BlueStack/Characteristic/Macro' element={<Macro />} />
        <Route path='/BlueStack/Characteristic/Reset' element={<Reset />} />
        <Route path='/BlueStack/Game' element={<Game />} />
      </Routes>
      <Footer />
    </Wrapper >
  );
}

export default App;
