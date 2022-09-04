import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light shadow">
        <div class="container">

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-black" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-black" href="/About">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-black" href="/Services">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-black" href="/Contact">Contact</a>
              </li>
            </ul>
            <a class="navbar-brand fw-bolder fs-4 mx-auto text-black" href="/">FINE ART</a>
            <a href='/login' className="btn btn-outline-primary ms-auto px-4 rounded-pill">
              <i className='fa fa-sign-in me-2'></i> Login</a>
            <a href='/register' className="btn btn-outline-primary ms-2 px-4 rounded-pill">
              <i className="fa fa-user-plus me-2"></i> Register</a>
            <a href='/dashboard' className="btn btn-outline-primary ms-2 px-4 rounded-pill">
            <i class="fa-solid fa-gauge-high"></i> Dashboard</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;