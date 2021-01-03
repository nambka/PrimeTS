import React from 'react';
import '../assets/css/nav.css';
import '../assets/css/style.css';
import Header from './header';
import Footer from './footer';
import PrimeForm from './PrimeForm';
import PrimesForm from './PrimesForm';

function App() {
  return (
    <div>
      <Header />
      <main className="container-fluid text-center">
        <PrimeForm />
        <PrimesForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
