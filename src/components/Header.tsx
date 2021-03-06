import imgLogo from '../assets/images/logo.png';

const Header = () => {
//   var btnDarkModeClasses = 'btn btn-sm btn-icon';
//   var btnDarkModeIcon = '';
//   if (theme === 'light') {
//   btnDarkModeClasses += ' btn-light';
//   btnDarkModeIcon = 'fa fa-sun-o';
//   } else if (theme === 'dark') {
//   btnDarkModeClasses += ' btn-dark';
//   btnDarkModeIcon = 'fa fa-circle-o';
//   } else {
//   btnDarkModeClasses += ' btn-moon';
//   btnDarkModeIcon = 'fa fa-moon-o';
//   }
      
  return (
    <nav id="ac-localnav" className="js touch css-sticky ac-ln-sticking" lang="en-US" dir="ltr" role="navigation" aria-label="Local">
        <div className="ac-ln-wrapper">
            <div className="ac-ln-background"></div>
            <div className="ac-ln-content">
                <div className="ac-ln-title">
                    <a className="border-radius-50" href="https://github.com/nambka/PrimeTS"><img src={imgLogo} alt="logo" /></a>
                </div>
                <div className="ac-ln-menu">
                    <a href="https://github.com/nambka/PrimeTS" className="ac-ln-menucta-anchor ac-ln-menucta-anchor-open" id="ac-ln-menustate-open">
                        <span className="ac-ln-menucta-anchor-label">Local Nav Open Menu</span>
                    </a>
                    <a href="https://github.com/nambka/PrimeTS" className="ac-ln-menucta-anchor ac-ln-menucta-anchor-close" id="ac-ln-menustate-close">
                        <span className="ac-ln-menucta-anchor-label">Local Nav Close Menu</span>
                    </a>
                    <div className="ac-ln-menu-tray">
                        <ul className="ac-ln-menu-items">
                            <li className="ac-ln-menu-item">
                                <span className="ac-ln-menu-link current" role="link" aria-disabled="true" aria-current="page">Home</span>
                            </li>
                            <li className="ac-ln-menu-item">
                                <a href="https://github.com/nambka/PrimeTS" className="ac-ln-menu-link">Design</a>
                            </li>
                            <li className="ac-ln-menu-item">
                                <a href="https://github.com/nambka/PrimeTS" className="ac-ln-menu-link">Products</a>
                            </li>
                        </ul>
                    </div>
                    <div className="ac-ln-actions">
                        <div className="ac-ln-action ac-ln-action-menucta" aria-hidden="true">
                            <label htmlFor="ac-ln-menustate" className="ac-ln-menucta">
                                <span className="ac-ln-menucta-chevron"></span>
                            </label>
                        </div>
                        <div className="ac-ln-action ac-ln-action-button">
                            <a className="ac-ln-button mr-3" href="https://github.com/nambka/PrimeTS">Login </a>
                            {/* <button id="btnDarkMode" className={btnDarkModeClasses} 
                                    onClick={() => {toggleTheme(theme)}} aria-label="Dark/Light Mode">
                                &nbsp;&nbsp;<i className={btnDarkModeIcon}></i></button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav> 
  );
}
export default Header;