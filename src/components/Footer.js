import React from "react";
import wall from "../assets/img/bg-man-wall.jpg";

export default function Footer() {
  return (
    <footer id="ts-footer" className="mt-5">
      <section
        id="contact"
        className="ts-block ts-separate-bg-element"
        data-bg-image={wall}
        data-bg-image-opacity=".1"
      >
        <div className="container footer-center">
          <div className="ts-title text-center">
            <h2 className="ts-bubble-border">Get In Touch</h2>
          </div>
          <div className="row ts-xs-text-center ">
            {/* <!-- start: ICON 1 --> */}
            <div className="col-sm-6 col-md-3 mb-4" data-animate="ts-fadeInUp">
              <i
                className="fas fa-map-marker-alt mb-4 footer-icon"
                alt="Pink icon of a map pin, indicating the location of Candra Fried"
              ></i>
              <h5>Location</h5>
              <div className="ts-opacity__50">
                <figure className="mb-0">Dallas, TX, USA</figure>
              </div>
            </div>
            {/* <!-- start: ICON 1 --> */}

            {/* <!-- start: ICON 2 --> */}
            <div
              className="col-sm-6 col-md-3 mb-4"
              data-animate="ts-fadeInUp"
              data-delay=".2s"
            >
              <i
                className="fas fa-envelope-open mb-4 footer-icon"
                alt="A pink icon of an at symbol indicating the email of Candra Fried"
              ></i>
              <h5>Email</h5>
              <div className="ts-opacity__50">
                <figure className="mb-0">letschat@candracodes.com</figure>
              </div>
              {/* <!--end ts-opacity__50--> */}
            </div>
            {/* <!-- start: ICON 2 --> */}

            {/* <!-- start: ICON 3 --> */}
            <div
              className="col-sm-6 col-md-3 mb-4"
              data-animate="ts-fadeInUp"
              data-delay=".2s"
            >
              <i
                className="fab fa-linkedin mb-4 footer-icon"
                alt="A pink LinkedIn icon"
              ></i>
              <h5>LinkedIn</h5>
              <div className="ts-opacity__50">
                <figure className="mb-0">
                  <a
                    href="https://www.linkedin.com/in/candracook/"
                    target="_blank" rel="noreferrer"
                  >
                    View Profile
                  </a>
                </figure>
              </div>
              {/* <!--end ts-opacity__50--> */}
            </div>
            {/* <!-- start: ICON 3 --> */}

            {/* <!-- start: ICON 4 --> */}
            <div
              className="col-sm-6 col-md-3 mb-4"
              data-animate="ts-fadeInUp"
              data-delay=".2s"
            >
              <i
                className="fab fa-github mb-4 footer-icon"
                alt="A pink LinkedIn icon"
              ></i>
              <h5>Github</h5>
              <div className="ts-opacity__50">
                <figure className="mb-0">
                  <a href="https://github.com/candracodes" target="_blank" rel="noreferrer">
                    View Profile
                  </a>
                </figure>
              </div>
              {/* <!--end ts-opacity__50--> */}
            </div>
          </div>
          {/* <!--end row--> */}
        </div>
        {/* <!--end container--> */}
      </section>
      {/* <!--end #contact--> */}

      <div className="text-dark bg-white">
        <div className="container py-3 position-relative">
          <small>Made with 💗 by Candra Fried | © 2021</small>
          <a
            href="#page-top"
            id="scrollToTopBtn"
            className="ts-circle__xs rounded-0 bg-dark ts-scroll"
          >
            <i className="fa fa-arrow-up text-white"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
