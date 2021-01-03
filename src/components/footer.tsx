import React from 'react';
import imgSnapSeed from '../assets/images/snapseed256.png';

const Footer = () => {
  return (
    <footer className="gradient-half-primary-body-v1 py-4"
        style={{height: 'calc(100% - 60px)',}}> 
        <div className="container">
            <div className="row justify-content-md-between font-size-1 py-3">
                <div className="col-lg-3 mb-4 mb-lg-0">
                    <div className="d-flex h-100 flex-column">
                        <div className="d-flex align-items-center mb-4">
                            <img src={imgSnapSeed} width="32" alt="Landing Page Logo"/>
                            <span className="h5 mb-0 ml-3">Powered by Nambk</span>
                        </div>
                        <p className="font-size-0-75">A brand new journey to the beautiful angles of this world. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>

                        <div className="d-flex align-items-center">
                            <a className="btn btn-xss btn-soft-light mr-2" href="/settings">
                                <i className="fa fa-cogs mr-1"></i>Preferences
                            </a>
                            <button id="btnDarkModeFooter" data-toggle="tooltip" data-title="Day/Night Mode" className="btn btn-sm btn-icon btn-soft-light" data-original-title="" aria-label="Dark/Light Mode">
                                <i className="fa fa-moon-o"></i></button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </footer> 
);
};

export default Footer;