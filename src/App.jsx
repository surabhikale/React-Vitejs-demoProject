import React from 'react';

import About from './sections/About';
import Searvice from './sections/Serviecs';
import Portfolio from './sections/Portfolio';
import Working from './sections/Working';
import Testito from './sections/Testito';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Header from './sections/header';
import Hero from './sections/hero';
function App() {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Searvice />
    <Portfolio />
    <Working />
    <Testito />
    <Contact />
    <Footer />
    </>
  );
}

export default App;