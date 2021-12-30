import React from "react";
import headshot from "./assets/img/headshot1.png";
import bgHero from "./assets/img/bg-hero.jpg";

export default function Hero() {
  return (
    <div id="ts-hero" className="ts-animate-hero-items">
      {/* <!--HERO CONTENT ****************************************************************************************--> */}
      <div className="container position-relative h-100 ts-align__vertical">
        <div className="row w-100">
          <div className="col-md-8">
            {/* <!--SOCIAL ICONS--> */}
            <figure className="ts-social-icons mb-4">
              {/* <!-- linkedin --> */}
              <a
                href="https://www.linkedin.com/in/candracook/"
                target="_blank"
                rel="noreferrer"
                className="mr-3"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              {/* <!-- github --> */}
              <a
                href="https://github.com/candracodes"
                target="_blank"
                rel="noreferrer"
                className="mr-3"
              >
                <i className="fab fa-github"></i>
              </a>
            </figure>

            {/* <!-- HEADSHOT --> */}
            <div className="mobile-headshot center text-center">
              <img
                src={headshot}
                alt="Candra in Black and White with a hat on."
              />
            </div>
            {/* <!--TITLE --> */}
            <h1>I am Candra Fried</h1>
            <h1 className="ts-bubble-border">
              <span className="ts-title-rotate">
                <span className="active">UX/UI Specialist</span>
                <span>Developer</span>
                <span>Artist</span>
              </span>
            </h1>
          </div>
          {/* <!--end col-md-8--> */}
        </div>
        {/* <!--end row--> */}

        {/* <!-- START: DOWN ARROW *********************************** --> */}
        <a
          href="#about-me"
          className="ts-btn-effect position-absolute ts-bottom__0 ts-left__0 ts-scroll ml-3 mb-3"
        >
          <span className="ts-visible ts-circle__sm rounded-0 ts-bg-primary">
            <i className="fa fa-arrow-down text-white"></i>
          </span>
          <span className="ts-hidden ts-circle__sm rounded-0">
            <i className="fa fa-arrow-down text-white"></i>
          </span>
        </a>
        {/* <!-- END: DOWN ARROW *********************************** --> */}
      </div>
      {/* <!--end container--> */}
      {/* <!--END HERO CONTENT ************************************************************************************--> */}

      {/* <!--HERO BACKGROUND *************************************************************************************--> */}
      <div className="ts-background">
        <div
          className="ts-background-image"
          data-bg-image={bgHero}
        ></div>
      </div>
      {/* <!--END HERO BACKGROUND *********************************************************************************--> */}
    </div>
  );
}
