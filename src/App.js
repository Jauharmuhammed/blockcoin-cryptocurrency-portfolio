import React from 'react';
import { Routes, Route, Link} from 'react-router-dom'
import {Navbar, Home, Cryptocurrencies, CryptoDetails, Exchanges, News, Footer} from './components'


function App() {
  return (
    <div >
      <Navbar/>
      <div className='min-h-screen'>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route  path='/coins' element={<Cryptocurrencies/>} />
          <Route  path='/coins/:coinId' element={<CryptoDetails/>} />
          <Route  path='/exchanges' element={ <Exchanges/>} />
          <Route  path='/news' element={<News/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
