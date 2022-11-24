import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import { Navbar, Home, Cryptocurrencies, CryptoDetails, Exchanges, News, Footer } from './components'


function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className=' bg-white dark:bg-slate-800'>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div class="min-h-screen">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/coins' element={<Cryptocurrencies />} />
            <Route path='/coins/:coinId' element={<CryptoDetails />} />
            <Route path='/exchanges' element={<Exchanges />} />
            <Route path='/news' element={<News />} />
          </Routes>
        </div>
      <Footer />
      </div>
    </div>
  );
}

export default App;
