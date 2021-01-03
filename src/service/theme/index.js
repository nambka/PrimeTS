import _mixins from './abstracts/_mixins'
import _variables from './abstracts/_variables'
import { useState, useEffect } from 'react';

export const useDarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const toggleTheme = () => {
      // theme === 'light' ? setTheme('dark') : setTheme('light')
      if (theme === 'light') {
        localStorage.setItem('theme', 'dark');
        setTheme('dark');
      } else if (theme === 'dark') {
        localStorage.setItem('theme', 'moon');
        setTheme('moon');
      } else {
        localStorage.setItem('theme', 'light');
        setTheme('light');
      }
    };

    useEffect(() => {
      const localTheme = window.localStorage.getItem('theme');
      localTheme && setTheme(localTheme);
    }, []);
    
    return [theme, toggleTheme];
};

const themes = {
  ..._mixins,
  ..._variables,
  lightTheme: {
    bodyBkg: '#F7F8F9',
    bodyTextColor: '#353637',
    footerBkg: 'linear-gradient(150deg,#19a0ff,#2d1582)',
    footerTextColor: '#fff',

    formBorder: '1px solid #eaecef22',

    formBkg: '#fff!important',
    // formBoxShadow: '0 2px 2px 0 rgba(0,0,0,.05)',
    formBoxShadow: '0 5px 30px 0 rgba(0,0,0,.2)',
    formTransition: '.3s all ease',

    formBkgHover: '#fff',
    formBoxShadowHover: '0 3px 10px 0 rgba(204,204,204,.8)',
    formTransitionHover: '.2s all ease',

    formHeaderDescColor: '#006647', // Contrast Checker:https://webaim.org/resources/contrastchecker/

    inputBkg: '#fff3',
    inputBorder: '1px solid #E6E8EA',
    inputBorderHover: '#F0B90B',

    resultBoxShadow: 'inset 0 0 5px 0 rgba(0,0,0,.1)', 
  },
  darkTheme: {
    bodyBkg: '#111',
    bodyTextColor: '#ccc',
    footerBkg: '#000',
    footerTextColor: '#ccc',

    formBorder: '1px solid #aaa3',

    formBkg: '#000!important',
    formBoxShadow: '0 0.5rem 1.2rem rgba(124,124,124,.2)',
    formTransition: '.3s all ease',

    formBkgHover: '#bbb1!important',
    formBoxShadowHover: '2px 5px 10px 0 rgba(0,0,0,.2)',
    formTransitionHover: '.2s all ease',

    formHeaderDescColor: '#00c087', // Contrast Checker:https://webaim.org/resources/contrastchecker/
    
    inputBkg: '#ccc2',
    inputBorder: '1px solid #555',
    inputBorderHover: '#1274e0',

    resultBoxShadow: 'inset 0 0 5px 0 rgba(0,0,0,.3)',
  },
  moonTheme: {
    bodyBkg: '#01263f',
    bodyTextColor: '#AABCCB',
    footerBkg: '#012137',
    footerTextColor: '#AABCCB',

    formBorder: '1px solid #18365b',

    formBkg: '#012137!important',
    // formBoxShadow: '0 2px 2px 0 rgba(0,0,0,.1)',
    formBoxShadow: '0 0.5rem 1.2rem rgba(4,76,124,.2)',
    formTransition: '.3s all ease',

    formBkgHover: '#bbb1!important',
    formBoxShadowHover: '2px 5px 10px 0 rgba(0,0,0,.3)',
    // formBoxShadowHover: '0 0.5rem 1.2rem rgba(4,76,124,.2)',
    formTransitionHover: '.2s all ease',

    formHeaderDescColor: '#00D696', // Contrast Checker:https://webaim.org/resources/contrastchecker/
    
    inputBkg: '#ccd2',
    inputBorder: '1px solid #256',
    inputBorderHover: '#2ac',

    resultBoxShadow: 'inset 0 0 5px 0 rgba(0,0,0,.3)',
    // resultBoxShadow: 'inset 0 0 10px #ddd;',
  }
};
export default themes;