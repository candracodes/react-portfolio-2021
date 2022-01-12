import React, { useState } from "react";
import headshot2 from "../assets/img/headshot2.png";
import bgKeyboard from "../assets/img/bg-keyboard.jpg";

function Main() {
  // define the project variables here. Default state needs to be empty because I'll have a million projects
  const [devProjectDetails, setDevProjectDetails] = useState([]);

  // src={process.env.PUBLIC_URL + '/img/logo.png'}
  // {process.env.PUBLIC_URL + '/assets/img/portfolio/img-1-daytripper-big.png'}
  
  // CREATE DEVELOPMENT PROJECT OBJECT TO CONTAIN ALL PROJECT DETAILS
  let devObjects = [
    {
      largeimage: "./react-portfolio-2021/assets/img/portfolio/img-1-daytripper-big.png",
      description: "DayTripper",
      role: "Sr. Dev/Designer",
      thumbnail: "./react-portfolio-2021/assets/img/portfolio/img-1-daytripper.png",
      altTag: "Car with bags on top driving down road for a road trip",
      title: "DayTripper (Private Repo)",
      projectURL: "https://watch.screencastify.com/v/idbkG3etJkti8xBrmelj",
      githubURL: "https://github.com/candracodes/daytripper"
    },
    {
      largeimage: "../assets/img/portfolio/img-2-weather-big.png",
      description: "Weather Dashboard",
      role: "Full Stack Dev/Designer",
      thumbnail: "../assets/img/portfolio/img-2-weather.png",
      altTag:
        "Gray and Blue squares containing today's forecast and the 5 day forecast, with accompanying icons representing clouds, the sun, and the weather of that day.",
      title: "Weather Dashboard",
      projectURL: "https://candracodes.github.io/weather-dashboard/",
      githubURL: "https://github.com/candracodes/weather-dashboard"
    },
    {
        largeimage: "../assets/img/portfolio/img-3-workday-big.png",
        description: "Workday Scheduler",
        role: "Full Stack Developer",
        thumbnail: "../assets/img/portfolio/img-3-workday.png",
        altTag: "A flat planner with gray blocks indicating time in the past, red blocks indicating time in the present, and green blocks representing blocks in the future.",
        title: "Workday Scheduler",
        projectURL: "https://candracodes.github.io/work-day-scheduler/",
        githubURL: "https://github.com/candracodes/work-day-scheduler"
    },
    {
        largeimage: "../assets/img/portfolio/img-5-codeQuiz-big.png",
        description: "Code Quiz",
        role: "Full Stack Developer",
        thumbnail: "../assets/img/portfolio/img-5-codeQuiz.png",
        altTag: "Beige background, with a header saying Javascript Code Quiz. 4 statements describing the timed nature of the quiz, followed by a blue button that says start.",
        title: "Code Quiz",
        projectURL: "https://candracodes.github.io/code-quiz/",
        githubURL: "https://github.com/candracodes/code-quiz"
    },
    {
        largeimage: "../assets/img/portfolio/img-5-3-candracodes-big.png",
        description: "Portfolio 2019",
        role: "Full Stack Dev/Designer",
        thumbnail: "../assets/img/portfolio/img-5-3-candracodes.png",
        altTag: "Beige background, with a header saying Javascript Code Quiz. 4 statements describing the timed nature of the quiz, followed by a blue button that says start.",
        title: "My 2019 Online Portfolio",
        projectURL: "https://candracodes.github.io/cfried-portfolio-2019/",
        githubURL: "https://github.com/candracodes/cfried-portfolio-2019"
    },
    {
        largeimage: "../assets/img/portfolio/img-5-2-ADHQ-big.png",
        description: "Affiliated Distributors",
        role: "Web Developer/Designer",
        thumbnail: "../assets/img/portfolio/img-5-2-ADHQ.png",
        altTag: "Beige background, with a header saying Javascript Code Quiz. 4 statements describing the timed nature of the quiz, followed by a blue button that says start.",
        title: "Affiliated Distributors HQ",
        projectURL: "https://adhq.com/",
        githubURL: ""
    },
    {
        largeimage: "../assets/img/portfolio/img-dev-7-onlypans-big.png",
        description: "OnlyPans",
        role: "Full Stack Developer/Designer",
        thumbnail: "../assets/img/portfolio/img-dev-7-onlypans-thumb.png",
        altTag: "Dark gray header with navigation options, large photo of a Thanksgiving spread where a large turkey is the centerpiece.",
        title: "OnlyPans — Recipes",
        projectURL: "https://onlypans-group-3.herokuapp.com/",
        githubURL: "https://github.com/candracodes/only-pans"
    },
    {
        largeimage: "../assets/img/portfolio/img-dev-8-teamprofile-big.png",
        description: "Profile Generator",
        role: "Full Stack Developer/Designer",
        thumbnail: "../assets/img/portfolio/img-dev-8-teamprofile-thumb.png",
        altTag: "Dark gray header with navigation options, large photo of a Thanksgiving spread where a large turkey is the centerpiece.",
        title: "Team Profile Generator",
        projectURL: "https://candracodes.github.io/team-profile-generator/dist/index.html",
        githubURL: "https://github.com/candracodes/team-profile-generator"
    },
    {
        largeimage: "../assets/img/portfolio/img-dev-9-notetaker-big.png",
        description: "Note Taker App",
        role: "Full Stack Developer",
        thumbnail: "../assets/img/portfolio/img-dev-9-notetaker-thumb.png",
        altTag: "Pretty basic image of a green navigation header with simple notes in the center, alongside a sidebar with previously entered note titles.",
        title: "Note Taker App",
        projectURL: "https://candra-note-taker.herokuapp.com/",
        githubURL: "https://github.com/candracodes/note-taker"
    }
  ];

  // CREATE PRINT PROJECT OBJECT TO CONTAIN ALL PROJECT DETAILS
  let printObjects = [{
          largeimage: "../assets/img/portfolio/img-19-print-big.png",
          client: "The Flaming Skillet",
          medium: "Logo Design",
          thumbnail: "../assets/img/portfolio/img-19-print-thumb.png",
          altTag: "description"
      },
      {
          largeimage: "../assets/img/portfolio/img-20-print-big.png",
          client: "Greg's Random Acts",
          medium: "Logo Design",
          thumbnail: "../assets/img/portfolio/img-20-print-thumb.png",
          altTag: "description"
      },
      {
          largeimage: "../assets/img/portfolio/img-21-print-big.png",
          client: "Left Handed Cakes",
          medium: "Logo Design",
          thumbnail: "../assets/img/portfolio/img-21-print-thumb.png",
          altTag: "description"
      },
      {
          largeimage: "../assets/img/portfolio/img-22-print-big.png",
          client: "Comcast UTM",
          medium: "Logo Design",
          thumbnail: "../assets/img/portfolio/img-22-print-thumb.png",
          altTag: "description"
      },
      {
          largeimage: "../assets/img/portfolio/img-23-print-big.png",
          client: "Sold By Sh'Ron",
          medium: "Logo + Billboard Design",
          thumbnail: "../assets/img/portfolio/img-23-print-thumb.png",
          altTag: "description"
      },
      {
          largeimage: "../assets/img/portfolio/img-24-print-big.png",
          client: "GeoDecisions",
          medium: "Tradeshow Banner",
          thumbnail: "../assets/img/portfolio/img-24-print-thumb.png",
          altTag: "description"
      },
      {
          largeimage: "../assets/img/portfolio/img-25-print-big.png",
          client: "Comcast",
          medium: "Newsletter Design",
          thumbnail: "../assets/img/portfolio/img-25-print-thumb.png",
          altTag: "description"
      },
      {
          largeimage: "../assets/img/portfolio/img-27-mixed-big.png",
          client: "Daytrion",
          medium: "CD Cover Design",
          thumbnail: "../assets/img/portfolio/img-27-mixed-thumb.png",
          altTag: "description"
      }
  ];

  // CREATE PRINT PROJECT OBJECT TO CONTAIN ALL PROJECT DETAILS
  let artObjects = [
      {
          largeimage: "../assets/img/portfolio/img-10-cicely.png",
          client: "Cicely Tyson",
          medium: "Pencil Drawing",
          thumbnail: "../assets/img/portfolio/img-10-cicely.png",
          altTag: "Actress Cicely Tyson drawn with graphite pencil onto beige canvas paper."
      },
      {
        largeimage: "../assets/img/portfolio/img-11-bootsy.png",
        client: "Bootsy Collins",
        medium: "Pencil Drawing",
        thumbnail: "../assets/img/portfolio/img-11-bootsy.png",
        altTag: "A colored pencil drawing of singer and bassist Bootsy Collins"
    },
    {
        largeimage: "../assets/img/portfolio/img-12-erykah.png",
        client: "Erykah Badu",
        medium: "Colored Pencil",
        thumbnail: "../assets/img/portfolio/img-12-erykah.png",
        altTag: "A colored pencil drawing of singer, Erykah Badu"
    },    
    {
        largeimage: "../assets/img/portfolio/img-13-andre.png",
        client: "Andre 3000",
        medium: "Digital Drawing/Procreate",
        thumbnail: "../assets/img/portfolio/img-13-andre.png",
        altTag: "A red and warm colored digital drawing of rapper/actor Andre 3000."
    },
    {
        largeimage: "../assets/img/portfolio/img-14-muhammed.png",
        client: "Muhammed Ali",
        medium: "Charcoal/Pencil Drawing",
        thumbnail: "../assets/img/portfolio/img-14-muhammed.png",
        altTag: "Black and white charcoal and graphite drawing of Muhammed Ali standing in a boxing ring over the top of Sonny Liston"
    },
    {
        largeimage: "../assets/img/portfolio/img-15-silver.png",
        client: "Silver Shadow",
        medium: "Comic Drawing/Procreate",
        thumbnail: "../assets/img/portfolio/img-15-silver.png",
        altTag: "A comic book styled digital drawing of a super hero woman against an intergalactic background."
    },
    {
        largeimage: "../assets/img/portfolio/img-17-fried.png",
        client: "Tom and Mary",
        medium: "Oil Painting",
        thumbnail: "../assets/img/portfolio/img-17-fried.png",
        altTag: "An oil painting of a man, woman, and their dog."
    },
    {
        largeimage: "../assets/img/portfolio/img-18-candra.png",
        client: "Self Portrait",
        medium: "Pencil Drawing",
        thumbnail: "../assets/img/portfolio/img-18-candra.png",
        altTag: "A black and white pencil drawing of Candra sitting in a window sill looking outward"
    },
    {
        largeimage: "../assets/img/portfolio/img-26-mixed-big.png",
        client: "Jimi Hendrix/Fender",
        medium: "Custom Guitar Woodwork",
        thumbnail: "../assets/img/portfolio/img-26-mixed-thumb.png",
        altTag: "Woodened detailed electric guitar with a painting of Jimi Hendrix woodburned into the guitar body"
    },
    {
        largeimage: "../assets/img/portfolio/img-28-mixed-big.png",
        client: "David Bowie",
        medium: "Digital Drawing/Sticker",
        thumbnail: "../assets/img/portfolio/img-28-mixed-thumb.png",
        altTag: "Vibrant colored David Bowie sticker with orange lightening bolt"
    },
    {
        largeimage: "../assets/img/portfolio/img-29-mixed-big.png",
        client: "Freddie Mercury",
        medium: "Digital Drawing/Sticker",
        thumbnail: "../assets/img/portfolio/img-29-mixed-thumb.png",
        altTag: "Circular, blue colored drawing of a sticker with Queen lead singer, Freddie Mercury holding a microphone and leaning backwards"
    }
];

  return (
    <main id="ts-content">
      {/* <!-- START: CONNECT ON LINKEDIN ***********************************************************************************--> */}
      <section className="ts-block">
        <div className="container">
          <div className="text-center px-5 pt-5 position-relative">
            <h3 className="my-3">Let’s Work Together On Your Next Project!</h3>
            <a
              href="#contact"
              className="btn btn-primary mr-2 ts-push-down__50 ts-has-talk-arrow"
            >
              Let's Connect!
            </a>
            <div
              className="ts-background ts-opacity__20"
              data-bg-image={bgKeyboard}
            ></div>
          </div>
        </div>
      </section>
      {/* <!-- END: CONNECT ON LINKEDIN ***********************************************************************************--> */}

      {/* <!-- START: ABOUT ME ***********************************************************************************--> */}
      <section id="about-me" className="ts-block pb-4">
        <div className="container">
          <div className="ts-title text-center">
            <h2>About Me</h2>
          </div>
          {/* <!--end ts-title--> */}
          <div className="row ts-align__vertical">
            <div className="col-md-6">
              <img
                src={headshot2}
                alt="A closeup Black and white of Candra Fried, wearing a hat."
                className="mw-100 mb-5"
              />
            </div>
            <div className="col-md-6">
              <h4 className="ts-bubble-border">Hi There</h4>
              <p>
                I'm Candra Fried. I'm a UX/UI Specialist & Full Stack Developer
                with career experience spanning over 15 years. I have a
                well-rounded career journey marrying design with functionality
                and clean code. Currently acting as a liaison between
                engineering and product — mentoring junior designers and
                developers, and continuing a quest to stay updated on the latest
                design and development trends.
              </p>
              <dl className="ts-column-count-2">
                <dt>Name:</dt>
                <dd>Candra Fried</dd>
                <dt>Email:</dt>
                <dd>letschat@candracodes.com</dd>
              </dl>
              <hr className="ts-hr-light mb-5" />
              <a href="#contact" className="ts-btn-effect mr-2">
                <span className="ts-visible btn btn-primary ts-btn-arrow">
                  Contact Me
                </span>
                <span
                  className="ts-hidden btn btn-primary ts-btn-arrow"
                  data-bg-color="#d44729"
                >
                  Contact Me
                </span>
              </a>
              <a
                href="https://drive.google.com/file/d/1RRoJONK1tHNtkOaTbDs-Kg0Tgqwt0rdT/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="ts-btn-effect mr-2"
              >
                <span className="ts-visible btn btn-outline-light">
                  <i className="fa fa-download small mr-2"></i>
                  Download CV
                </span>
                <span className="ts-hidden btn btn-light bg-white">
                  <i className="fa fa-download small mr-2"></i>
                  Download CV
                </span>
              </a>
            </div>
          </div>
          {/* <!--end row--> */}
        </div>
      </section>
      {/* <!-- END: ABOUT ME ***********************************************************************************--> */}

      {/* <!-- START: PORTFOLIO ***********************************************************************************--> */}
      <section className="ts-block pb-5" id="portfolio">
        <div className="container">
          <hr className="ts-hr-light" />
          {/* <!--start ts-title--> */}
          <div className="ts-title portfolio-title">
            <h2>Portfolio</h2>
          </div>
          {/* <!--end ts-title--> */}

          <hr className="ts-hr-light" />

          {/* <!-- start: DEVELOPMENT --> */}
          <div id="show-development" className="row">
            {/* <!-- ABOUT THIS SECTION --> */}
            <div className="col-sm-12 col-md-12 col-lg-12">
              <h4 className="portfolio-subheader">Development</h4>
              <hr className="ts-hr-light" />
              <p>
                I've had a wonderful career journey that has allowed me to work
                both on the Frontend and Backend to get a full grasp of Software
                Development Lifecycle (SDLC). In many cases, I can't showcase
                previous work (can't expose company secrets). Here are just a
                few projects I've worked on that have no business-affiliation...
                just to give a small grasp at how I approach development
                projects, and my coding style.
              </p>
            </div>

            {/* <!-- ALL DEVELOPMENT OBJECTS --> */}
            {devObjects.map((card) => (
              <>
                <div className="ts-gallery col-sm-12 col-md-3">
                  <a
                    href={card.largeimage}
                    className="card ts-gallery__item popup-image"
                  >
                    <div className="ts-gallery__item-description">
                      <h6 className="ts-opacity__50">{card.description}</h6>
                      <h4>{card.role}</h4>
                    </div>
                    <img
                      src={card.thumbnail}
                      className="card-img"
                      alt={card.altTag}
                    />
                  </a>
                  <br />
                  <h5>{card.title}</h5>
                  <p className="project-link">
                    <a target="_blank" rel="noreferrer" href={card.projectURL}>
                      Project URL
                    </a>
                    <br />
                    <a target="_blank" rel="noreferrer" href={card.githubURL}>
                      Github Repo
                    </a>
                  </p>
                </div>
              </>
            ))}

          </div>
          {/* <!-- end: DEVELOPMENT --> */}

          {/* <!-- START: PRINT --> */}
          <div id="show-print" className="row">
            {/* <!-- ABOUT THIS SECTION --> */}
            <div className="col-sm-12 col-md-12 col-lg-12">
              <h4 className="portfolio-subheader">Print</h4>
              <hr className="ts-hr-light" />
              <p>
                From billboards, to logos, to brochures, flyers, catalogs and
                more ... I've designed some of everything. Although I enjoy
                programming, digital design will always be near to my heart.
              </p>
            </div>

            {/* <!-- ALL PRINT OBJECTS --> */}
            <div className="card-columns ts-gallery ts-column-count-4">
                {printObjects.map((card) => (
                <>
                <a href={card.largeimage} className="card ts-gallery__item popup-image">
                    <div className="ts-gallery__item-description">
                    <h6 className="ts-opacity__50">{card.client}</h6>
                    <h4>{card.medium}</h4>
                    </div>
                    <img src={card.thumbnail} className="card-img" alt={card.altTag} />
                </a>
                </>
                ))}
            </div>

          </div>
          {/* <!-- end: PRINT --> */}

          {/* <!-- start: ART --> */}
          <div id="show-art" className="row">
            {/* <!-- ABOUT THIS SECTION --> */}
            <div className="col-sm-12 col-md-12 col-lg-12">
              <h4 className="portfolio-subheader">Artwork</h4>
              <hr className="ts-hr-light" />
              <p>
                Creating works of art is where everything started for me. It
                helped to mold my thinking as a developer, and pay attention to
                details. This is a small collection of some of the artwork I've
                created over the years.
              </p>
            </div>
            {/* <!-- ALL ART OBJECTS --> */}
            <div className="card-columns ts-gallery ts-column-count-4">
                
                {artObjects.map((card) => (
                <>
                <a href={card.largeimage} className="card ts-gallery__item popup-image">
                    <div className="ts-gallery__item-description">
                    <h6 className="ts-opacity__50">{card.client}</h6>
                    <h4>{card.medium}</h4>
                    </div>
                    <img src={card.thumbnail} className="card-img" alt={card.altTag} />
                </a>
                </>
                ))}
            </div>
          </div>
          {/* <!-- start: ART --> */}
        </div>
        {/* <!--end container--> */}
      </section>
      {/* <!-- END: PORTFOLIO ***********************************************************************************--> */}

      {/* <!-- START: MY SKILLS ***********************************************************************************--> */}
      <section id="my-skills" className="ts-block pb-5">
        <div className="container">
          <hr className="ts-hr-light" />
          <div className="ts-title portfolio-title">
            <h2>My Skills</h2>
          </div>
          {/* <!--end ts-title--> */}
          <hr className="ts-hr-light" />
          <div className="row">
            <div className="col-md-6">
              <p>
                I specialize in a variety of creative services ranging from
                professional illustrations, print-work to web development. I'm
                proficient in the full Adobe Creative Suite, HTML 5, CSS,
                Javascript and several other frameworks/libraries.
              </p>
              <a href="#contact" className="btn btn-outline-light mb-5">
                Contact Me
              </a>
            </div>
            {/* <!--end col-md-6--> */}
            <div className="col-md-6">
              <div className="progress" data-progress-width="100%">
                <h5 className="ts-progress-title">UX Design</h5>
                <figure className="ts-progress-value"></figure>
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              {/* <!--end progress--> */}
              <div className="progress" data-progress-width="95%">
                <h5 className="ts-progress-title">UI Development</h5>
                <figure className="ts-progress-value"></figure>
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              {/* <!--end progress--> */}
              <div className="progress" data-progress-width="100%">
                <h5 className="ts-progress-title">Adobe Creative Suite</h5>
                <figure className="ts-progress-value"></figure>
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              {/* <!--end progress--> */}
              <div className="progress" data-progress-width="100%">
                <h5 className="ts-progress-title">Prototyping & Wireframing</h5>
                <figure className="ts-progress-value"></figure>
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              {/* <!--end progress--> */}
              <div className="progress" data-progress-width="99%">
                <h5 className="ts-progress-title">Painting & Illustration</h5>
                <figure className="ts-progress-value"></figure>
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              {/* <!--end progress--> */}
              <div className="progress" data-progress-width="80%">
                <h5 className="ts-progress-title">Graphics & Crafting</h5>
                <figure className="ts-progress-value"></figure>
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              {/* <!--end progress--> */}
            </div>
            {/* <!--end col-md-6--> */}
          </div>
          {/* <!--end row--> */}
        </div>
        {/* <!--end container--> */}
      </section>
      {/* <!-- END: MY SKILLS ***********************************************************************************--> */}
    </main>
  );
}

export default Main;
