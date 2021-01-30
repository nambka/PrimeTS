import React from 'react';
import '../assets/css/nav.css';
import '../assets/css/style.css';
import Header from './header';
import Footer from './footer';
import PrimeForm from './PrimeForm';
import PrimesForm from './PrimesForm';

import { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme, moonTheme, useDarkMode} from '../service/theme';
import { GlobalStyle } from '../service/theme/global';

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  // console.log('Current theme: ', theme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : (theme === 'dark' ? darkTheme : moonTheme)}>    
      <GlobalStyle />
      <Header theme={theme} toggleTheme={toggleTheme}/>
      <main className="container-fluid text-center">
        <PrimeForm />
        <PrimesForm />
      </main>
      <Footer theme={theme} toggleTheme={toggleTheme}/>
    </ThemeProvider> 
  );
};
export default App;
