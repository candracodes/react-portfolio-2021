import React from "react";
import logo from "../assets/img/logo.png"; //importing logo the React method

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
      <div className="container">
        <a
          className="navbar-brand ts-push-down__50 position-absolute ts-bottom__0 bg-white pb-0 ts-z-index__1 ts-scroll"
          href="#page-top"
        >
          <img
            src={logo}
            alt="White text against Pink background of Candra Fried logo."
          />
        </a>
        {/* <!--end navbar-brand--> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <!--end navbar-toggler--> */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav d-block d-lg-flex ml-auto text-right">
            <a className="nav-item nav-link active ts-scroll" href="#page-top">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link ts-scroll" href="#about-me">
              About Me
            </a>
            <a className="nav-item nav-link ts-scroll" href="#portfolio">
              Portfolio
            </a>
            <a className="nav-item nav-link ts-scroll" href="#my-skills">
              Skills
            </a>
            <a className="nav-item nav-link ts-scroll" href="#contact">
              Contact
            </a>
            <a
              className="nav-item nav-link ts-scroll mr-2"
              href="https://www.etsy.com/shop/FriedCookieCreations"
              target="_blank"
              rel="noreferrer"
            >
              Etsy
            </a>
          </div>
          {/* <!--end navbar-nav--> */}
        </div>
        {/* <!--end collapse--> */}
      </div>
      {/* <!--end container--> */}
    </nav>
  );
}
