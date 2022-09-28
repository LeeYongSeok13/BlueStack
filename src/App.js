import React from 'react';
import './App.css';
import Wrapper from './pages/Wrapper';
import Header from './pages/Header';
import Main from './pages/Main';
import Characteristic from './pages/Characteristic';
import Game from './pages/Game';
import Footer from './pages/Footer';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/BlueStack' element={<Main />} />
        <Route path='/BlueStack/Characteristic' element={<Characteristic />} />
        <Route path='/BlueStack/Game' element={<Game />} />
      </Routes>
      <Footer />
    </Wrapper >
  );
}

export default App;
