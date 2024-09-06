// import React from 'react';

import Analytic from './components/Analytic';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletters from './components/Newsletters';
import Portfolio from './components/Portfolio';
import Services from './components/Services';


const App = () => {
  return (
   <div>
    <Navbar />
    <Hero/> 
<Analytic/>
<Services/>
<Newsletters/>
<Cards/>
<Portfolio/>
<Footer />
   </div>
  );
  
}

export default App