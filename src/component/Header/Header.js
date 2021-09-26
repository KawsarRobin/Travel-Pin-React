import React from 'react';
import './Header.css';

const Header = () => {
  return (
    //Navbar and Title are added in header
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand fw-bold" href="/travel">
              Travel Pin
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/booking"
                >
                  My Booking
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/partner"
                >
                  Partner With Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/partner"
                >
                  Saved
                </a>
              </li>
            </ul>
            <form className="d-flex ">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Package"
                aria-label="Search"
              />
              <button className="btn btn-warning" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className=" header-title text-center my-3 pb-3">
        <h3>Travel Packages</h3>
        <h6>
          Traveling with family or group? Our various payment options such as
          Transfer & ATM and Credit Card will take care of any transactions, big
          or small. Leave your worries behind! Popular Travel Packages with
          Airfare and Hotel. Book the right flight with our no change fees
          filter.
        </h6>
        <h5>Total Budget For Tours: $1000</h5>
      </div>
    </div>
  );
};

export default Header;
