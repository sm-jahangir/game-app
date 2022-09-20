import React from "react";
import "./NavbarComponent.css";

const NavbarComponent = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-white p-3'>
      <div className='container-fluid'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarTogglerDemo01'
          aria-controls='navbarTogglerDemo01'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
          <a className='navbar-brand' href='/'>
            <img width={110} src='assets/logo.png' alt='' />
          </a>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                GAMES & EXPERIENCES
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                EVENTS
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                VOUCHER
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                CONTACT
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                FAQ
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                PRICING
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                JOBS
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                MORE
              </a>
            </li>
          </ul>
          <div className='d-flex' role='search'>
            <li className='nav-item list-unstyled'>
              <a href='/' className='nav-link text-uppercase'>
                Book Now
              </a>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
