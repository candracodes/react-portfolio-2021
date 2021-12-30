import React from "react";
import headshot2 from "./assets/img/headshot2.png";
import bgKeyboard from "./assets/img/bg-keyboard.jpg"


export default function Main() {
  return (
    <main id="ts-content">

    {/* <!-- START: CONNECT ON LINKEDIN ***********************************************************************************--> */}
    <section className="ts-block">
        <div className="container">
            <div className="text-center px-5 pt-5 position-relative">
                <h3 className="my-3">
                    Let’s Work Together On Your Next Project!
                </h3>
                <a href="#contact" className="btn btn-primary mr-2 ts-push-down__50 ts-has-talk-arrow">Let's
                    Connect!</a>
                <div className="ts-background ts-opacity__20" data-bg-image={bgKeyboard}></div>
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
                    <img src={headshot2} alt="A closeup Black and white of Candra Fried, wearing a hat." className="mw-100 mb-5" />
                </div>
                <div className="col-md-6">
                    <h4 className="ts-bubble-border">Hi There</h4>
                    <p>
                        I'm Candra Fried. I'm a UX/UI Specialist & Full Stack Developer with career experience
                        spanning over 15 years.
                        I have a well-rounded career journey marrying design with functionality and clean code.
                        Currently acting as a liaison between engineering and product —
                        mentoring junior designers and developers, and continuing a quest to stay updated on the
                        latest design
                        and development trends.
                    </p>
                    <dl className="ts-column-count-2">
                        <dt>Name:</dt>
                        <dd>Candra Fried</dd>
                        <dt>Email:</dt>
                        <dd>letschat@candracodes.com</dd>
                    </dl>
                    <hr className="ts-hr-light mb-5" />
                    <a href="#contact" className="ts-btn-effect mr-2">
                        <span className="ts-visible btn btn-primary ts-btn-arrow">Contact Me</span>
                        <span className="ts-hidden btn btn-primary ts-btn-arrow" data-bg-color="#d44729">Contact
                            Me</span>
                    </a>
                    <a href="https://drive.google.com/file/d/1RRoJONK1tHNtkOaTbDs-Kg0Tgqwt0rdT/view?usp=sharing"
                        target="_blank" rel="noreferrer" className="ts-btn-effect mr-2">
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
                        I've had a wonderful career journey that has allowed me to work both on the Frontend and
                        Backend to get a full grasp of Software Development Lifecycle (SDLC).
                        In many cases, I can't showcase previous work (can't expose company secrets). Here are
                        just a few projects I've worked on that have no business-affiliation... just to give a
                        small grasp at
                        how I approach development projects, and my coding style.
                    </p>
                </div>
                {/* <!-- PROJECT 1: DAYTRIPPER --> */}
                <div className="ts-gallery col-sm-12 col-md-3">    
                    <a href="./assets/img/portfolio/img-1-daytripper-big.png"
                        className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__item-description">
                            <h6 className="ts-opacity__50">DayTripper</h6>
                            <h4>Sr. Dev/Designer</h4>
                        </div>
                        <img src="./assets/img/portfolio/img-1-daytripper.png" className="card-img"
                            alt="Car with bags on top driving down road for a road trip" />
                        {/* <!--end ts-gallery__image--> */}
                    </a>
                    <br />
                    <h5>DayTripper (Private Repo)</h5>
                    <p className="project-link"><a target="_blank" rel="noreferrer" href="https://watch.screencastify.com/v/idbkG3etJkti8xBrmelj">Video Walk-Through</a><br />
                        <a target="_blank" rel="noreferrer" href="https://w1z9cu.axshare.com/">Wireframe</a><br />
                    </p>
                </div>
                {/* <!-- PROJECT 2: WEATHER DASHBOARD --> */}
                <div className="ts-gallery col-sm-12 col-md-3">
                    <a href="./assets/img/portfolio/img-2-weather-big.png" className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__item-description">
                            <h6 className="ts-opacity__50">Weather Dashboard</h6>
                            <h4>Full Stack Dev/Designer</h4>
                        </div>
                        <img src="./assets/img/portfolio/img-2-weather.png" className="card-img"
                            alt="Gray and Blue squares containing today's forecast and the 5 day forecast, with accompanying icons representing clouds, the sun, and the weather of that day." />
                        {/* <!--end ts-gallery__image--> */}
                    </a>
                    <br />
                    <h5>Weather Dashboard</h5>
                    <p className="project-link">
                        <a target="_blank" rel="noreferrer" href="https://candracodes.github.io/weather-dashboard/">URL</a><br />
                        <a target="_blank" rel="noreferrer" href="https://github.com/candracodes/weather-dashboard">Github</a>
                    </p>
                </div>
                {/* <!-- PROJECT 3: WORKDAY SCHEDULER --> */}
                <div className="ts-gallery col-sm-12 col-md-3">
                    <a href="./assets/img/portfolio/img-3-workday-big.png" className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__item-description">
                            <h6 className="ts-opacity__50">Workday Scheduler</h6>
                            <h4>Full Stack Developer</h4>
                        </div>
                        <img src="./assets/img/portfolio/img-3-workday.png" className="card-img"
                            alt="A flat planner with gray blocks indicating time in the past, red blocks indicating time in the present, and green blocks representing blocks in the future." />
                        {/* <!--end ts-gallery__image--> */}
                    </a>
                    <br />
                    <h5>Workday Scheduler</h5>
                    <p className="project-link">
                        <a target="_blank" rel="noreferrer" href="https://candracodes.github.io/work-day-scheduler/">URL</a><br />
                        <a target="_blank" rel="noreferrer" href="https://github.com/candracodes/work-day-scheduler">Github</a>
                    </p>
                </div>
                {/* <!-- PROJECT 4: CODE QUIZ --> */}
                <div className="ts-gallery col-sm-12 col-md-3">
                    <a href="./assets/img/portfolio/img-5-codeQuiz-big.png" className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__item-description">
                            <h6 className="ts-opacity__50">Code Quiz</h6>
                            <h4>Full Stack Developer</h4>
                        </div>
                        <img src="./assets/img/portfolio/img-5-codeQuiz.png" className="card-img"
                            alt="Beige background, with a header saying Javascript Code Quiz. 4 statements describing the timed nature of the quiz, followed by a blue button that says start." />
                        {/* <!--end ts-gallery__image--> */}
                    </a>
                    <br />
                    <h5>Code Quiz</h5>
                    <p className="project-link">
                        <a target="_blank" rel="noreferrer" href="https://candracodes.github.io/code-quiz/">URL</a><br />
                        <a target="_blank" rel="noreferrer" href="https://github.com/candracodes/code-quiz">Github</a>
                    </p>
                </div>
                {/* <!-- PROJECT 5: CANDRACODES 2019 --> */}
                <div className="ts-gallery col-sm-12 col-md-3">
                    <a href="./assets/img/portfolio/img-5-3-candracodes-big.png"
                        className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__item-description">
                            <h6 className="ts-opacity__50">Portfolio 2019</h6>
                            <h4>Full Stack Dev/Designer</h4>
                        </div>
                        <img src="./assets/img/portfolio/img-5-3-candracodes.png" className="card-img"
                            alt="Beige background, with a header saying Javascript Code Quiz. 4 statements describing the timed nature of the quiz, followed by a blue button that says start." />
                        {/* <!--end ts-gallery__image--> */}
                    </a>
                    <br />
                    <h5>My 2019 Online Portfolio</h5>
                    <p className="project-link">
                        <a target="_blank" rel="noreferrer" href="https://candracodes.github.io/cfried-portfolio-2019/">URL</a><br />
                        <a target="_blank" rel="noreferrer" href="https://github.com/candracodes/cfried-portfolio-2019">Github</a>
                    </p>
                </div>
                {/* <!-- PROJECT 6: ADHQ--> */}
                <div className="ts-gallery col-sm-12 col-md-3">
                    <a href="./assets/img/portfolio/img-5-2-ADHQ-big.png"
                        className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__item-description">
                            <h6 className="ts-opacity__50">Affiliated Distributors</h6>
                            <h4>Web Developer/Designer</h4>
                        </div>
                        <img src="./assets/img/portfolio/img-5-2-ADHQ.png" className="card-img"
                            alt="Beige background, with a header saying Javascript Code Quiz. 4 statements describing the timed nature of the quiz, followed by a blue button that says start." />
                        {/* <!--end ts-gallery__image--> */}
                    </a>
                    <br />
                    <h5>Affiliated Distributors HQ</h5>
                    <p className="project-link">
                        <a target="_blank" rel="noreferrer" href="https://adhq.com/">URL</a><br />
                    </p>
                </div>
                {/* <!-- PROJECT 7: ONLYPANS --> */}
                <div className="ts-gallery col-sm-12 col-md-3">
                    {/* <!-- LARGE IMAGE --> */}
                    <a href="./assets/img/portfolio/img-dev-7-onlypans-big.png"
                        className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__item-description">
                            <h6 className="ts-opacity__50">OnlyPans</h6>
                            <h4>Full Stack Developer/Designer</h4>
                        </div>
                        {/* <!-- THUMBNAIL --> */}
                        <img src="./assets/img/portfolio/img-dev-7-onlypans-thumb.png" className="card-img"
                            alt="Dark gray header with navigation options, large photo of a Thanksgiving spread where a large turkey is the centerpiece." />
                        {/* <!--end ts-gallery__image--> */}
                    </a>
                    <br />
                    <h5>OnlyPans — Recipes</h5>
                    <p className="project-link">
                        <a target="_blank" rel="noreferrer" href="https://onlypans-group-3.herokuapp.com/">URL</a><br />
                        <a target="_blank" rel="noreferrer" href="https://github.com/candracodes/only-pans">Github</a>
                    </p>
                </div>
                {/* <!-- PROJECT 8: TEAM PROFILE GENERATOR --> */}
                <div className="ts-gallery col-sm-12 col-md-3">
                    {/* <!-- LARGE IMAGE --> */}
                    <a href="./assets/img/portfolio/img-dev-8-teamprofile-big.png"
                        className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__item-description">
                            <h6 className="ts-opacity__50">Profile Generator</h6>
                            <h4>Full Stack Developer/Designer</h4>
                        </div>
                        {/* <!-- THUMBNAIL --> */}
                        <img src="./assets/img/portfolio/img-dev-8-teamprofile-thumb.png" className="card-img"
                            alt="Dark gray header with navigation options, large photo of a Thanksgiving spread where a large turkey is the centerpiece." />
                        {/* <!--end ts-gallery__image--> */}
                    </a>
                    <br />
                    <h5>Team Profile Generator</h5>
                    <p className="project-link">
                        <a target="_blank" rel="noreferrer" href="https://candracodes.github.io/team-profile-generator/dist/index.html">URL</a><br />
                        <a target="_blank" rel="noreferrer" href="https://github.com/candracodes/team-profile-generator">Github</a>
                    </p>
                </div>
                {/* <!-- PROJECT 9: NOTE TAKER APP --> */}
                <div className="ts-gallery col-sm-12 col-md-3">
                    {/* <!-- LARGE IMAGE --> */}
                    <a href="./assets/img/portfolio/img-dev-9-notetaker-big.png"
                        className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__item-description">
                            <h6 className="ts-opacity__50">Note Taker App</h6>
                            <h4>Full Stack Developer</h4>
                        </div>
                        {/* <!-- THUMBNAIL --> */}
                        <img src="./assets/img/portfolio/img-dev-9-notetaker-thumb.png" className="card-img"
                            alt="Pretty basic image of a green navigation header with simple notes in the center, alongside a sidebar with previously entered note titles." />
                        {/* <!--end ts-gallery__image--> */}
                    </a>
                    <br />
                    <h5>Note Taker App</h5>
                    <p className="project-link">
                        <a target="_blank" rel="noreferrer" href="https://candra-note-taker.herokuapp.com/">URL</a><br />
                        <a target="_blank" rel="noreferrer" href="https://github.com/candracodes/note-taker">Github</a>
                    </p>
                </div>
            </div>
            {/* <!-- end: DEVELOPMENT --> */}

            {/* <!-- START: PRINT --> */}
            <div id="show-print" className="row">
                {/* <!-- ABOUT THIS SECTION --> */}
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <h4 className="portfolio-subheader">Print</h4>
                    <hr className="ts-hr-light" />
                    <p>
                        From billboards, to logos, to brochures, flyers, catalogs and more ... I've designed
                        some of everything. Although I enjoy programming, digital design will always be near to
                        my heart.
                    </p>
                </div>
                {/* <!-- start: card-columns (4) --> */}
                <div className="card-columns ts-gallery ts-column-count-4">
                    {/* <!-- THE FLAMING SKILLET --> */}
                    <a href="./assets/img/portfolio/img-19-print-big.png"
                        className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__item-description">
                            <h6 className="ts-opacity__50">The Flaming Skillet</h6>
                            <h4>Logo Design</h4>
                        </div>
                        <img src="./assets/img/portfolio/img-19-print-thumb.png" className="card-img"
                            alt="description" />
                    </a>
                    {/* <!-- GREG'S RANDOM ACTS --> */}
                    <a href="./assets/img/portfolio/img-20-print-big.png" className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__item-description">
                            <h6 className="ts-opacity__50">Greg's Random Acts</h6>
                            <h4>Logo Design</h4>
                        </div>
                        <img src="./assets/img/portfolio/img-20-print-thumb.png" className="card-img"
                            alt="description" />
                    </a>
                    {/* <!-- LEFT HANDED CAKES --> */}
                    <a href="./assets/img/portfolio/img-21-print-big.png"
                        className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__item-description">
                            <h6 className="ts-opacity__50">Left Handed Cakes</h6>
                            <h4>Logo Design</h4>
                        </div>
                        <img src="./assets/img/portfolio/img-21-print-thumb.png" className="card-img"
                            alt="description" />
                    </a>
                    {/* <!-- COMCAST UTM --> */}
                    <a href="./assets/img/portfolio/img-22-print-big.png"
                        className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__item-description">
                            <h6 className="ts-opacity__50">Comcast UTM</h6>
                            <h4>Logo Design</h4>
                        </div>
                        <img src="./assets/img/portfolio/img-22-print-thumb.png" className="card-img"
                            alt="description" />
                    </a>

                </div>
                {/* <!-- end: card-columns (4) --> */}

                {/* <!-- start: card-columns (3) --> */}
                <div className="card-columns ts-gallery ts-column-count-4">
                    {/* <!-- SOLD BY SH'RON --> */}
                    <a href="./assets/img/portfolio/img-23-print-big.png"
                        className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__item-description">
                            <h6 className="ts-opacity__50">Sold By Sh'Ron</h6>
                            <h4>Logo + Billboard Design</h4>
                        </div>
                        <img src="./assets/img/portfolio/img-23-print-thumb.png" className="card-img"
                            alt="description" />
                    </a>
                    {/* <!-- GEODECISIONS TRADESHOW BANNER --> */}
                    <a href="./assets/img/portfolio/img-24-print-big.png"
                        className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__item-description">
                            <h6 className="ts-opacity__50">GeoDecisions</h6>
                            <h4>Tradeshow Banner</h4>
                        </div>
                        <img src="./assets/img/portfolio/img-24-print-thumb.png" className="card-img"
                            alt="description" />
                    </a>
                    {/* <!-- COMCAST NEWSLETTER --> */}
                    <a href="./assets/img/portfolio/img-25-print-big.png"
                        className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__item-description">
                            <h6 className="ts-opacity__50">Comcast</h6>
                            <h4>Newsletter Design</h4>
                        </div>
                        <img src="./assets/img/portfolio/img-25-print-thumb.png" className="card-img"
                            alt="description" />
                    </a>
                    {/* <!-- DAYTRION CD --> */}
                    <a href="./assets/img/portfolio/img-27-mixed-big.png"
                        className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__item-description">
                            <h6 className="ts-opacity__50">Daytrion</h6>
                            <h4>CD Cover Design</h4>
                        </div>
                        <img src="./assets/img/portfolio/img-27-mixed-thumb.png" className="card-img"
                            alt="description" />
                    </a>

                </div>
                {/* <!-- end: card-columns (3) --> */}
            </div>
            {/* <!-- end: PRINT --> */}

            {/* <!-- start: ART --> */}
            <div id="show-art" className="row">
                {/* <!-- ABOUT THIS SECTION --> */}
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <h4 className="portfolio-subheader">Artwork</h4>
                    <hr className="ts-hr-light" />
                    <p>
                        Creating works of art is where everything started for me. It helped to mold my thinking
                        as a developer, and pay attention to details.
                        This is a small collection of some of the artwork I've created over the years.
                    </p>
                </div>
                {/* <!-- start: card-columns --> */}
                <div className="card-columns ts-gallery ts-column-count-4">
                    {/* <!-- CICELY TYSON --> */}
                    <a href="./assets/img/portfolio/img-10-cicely.png" className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__item-description">
                            <h6 className="ts-opacity__50">Cicely Tyson</h6>
                            <h4>Pencil Drawing</h4>
                        </div>
                        <img src="./assets/img/portfolio/img-10-cicely.png" className="card-img"
                            alt="Actress Cicely Tyson drawn with graphite pencil onto beige canvas paper." />
                    </a>
                    {/* <!-- BOOTSY COLLINS --> */}
                    <a href="./assets/img/portfolio/img-11-bootsy.png" className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__image">
                            <div className="ts-gallery__item-description">
                                <h6 className="ts-opacity__50">Bootsy Collins</h6>
                                <h4>Pencil Drawing</h4>
                            </div>
                            <img src="./assets/img/portfolio/img-11-bootsy.png" className="card-img"
                                alt="A colored pencil drawing of singer and bassist Bootsy Collins" />
                        </div>
                    </a>
                    {/* <!-- ERYKAH BADU --> */}
                    <a href="./assets/img/portfolio/img-12-erykah.png" className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__image">
                            <img src="./assets/img/portfolio/img-12-erykah.png" className="card-img"
                                alt="A colored pencil drawing of singer, Erykah Badu." />
                            <div className="ts-gallery__item-description">
                                <h6 className="ts-opacity__50">Erykah Badu</h6>
                                <h4>Colored Pencil</h4>
                            </div>
                        </div>
                    </a>
                    {/* <!-- ANDRE 3000 --> */}
                    <a href="./assets/img/portfolio/img-13-andre.png" className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__image">
                            <img src="./assets/img/portfolio/img-13-andre.png" className="card-img"
                                alt="A red and warm colored digital drawing of rapper/actor Andre 3000." />
                            <div className="ts-gallery__item-description">
                                <h6 className="ts-opacity__50">Andre 3000</h6>
                                <h4>Digital Drawing/Procreate</h4>
                            </div>
                        </div>
                    </a>
                    {/* <!-- MUHAMMED ALI --> */}
                    <a href="./assets/img/portfolio/img-14-muhammed.png"
                        className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__image">
                            <img src="./assets/img/portfolio/img-14-muhammed.png" className="card-img"
                                alt="Black and white charcoal and graphite drawing of Muhammed Ali standing in a boxing ring over the top of Sonny Liston" />
                            <div className="ts-gallery__item-description">
                                <h6 className="ts-opacity__50">Muhammed Ali</h6>
                                <h4>Charcoal/Pencil Drawing</h4>
                            </div>
                        </div>
                    </a>
                    {/* <!-- SILVER SHADOW --> */}
                    <a href="./assets/img/portfolio/img-15-silver.png" className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__image">
                            <img src="./assets/img/portfolio/img-15-silver.png" className="card-img"
                                alt="A comic book styled digital drawing of a super hero woman against an intergalactic background." />
                            <div className="ts-gallery__item-description">
                                <h6 className="ts-opacity__50">Silver Shadow</h6>
                                <h4>Comic Drawing/Procreate</h4>
                            </div>
                        </div>
                    </a>
                    {/* <!-- THE FRIEDS --> */}
                    <a href="./assets/img/portfolio/img-17-fried.png" className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__image">
                            <img src="./assets/img/portfolio/img-17-fried.png" className="card-img"
                                alt="An oil painting of a man, woman, and their dog." />
                            <div className="ts-gallery__item-description">
                                <h6 className="ts-opacity__50">Tom and Mary</h6>
                                <h4>Oil Painting</h4>
                            </div>
                        </div>
                    </a>
                    {/* <!-- CANDRA --> */}
                    <a href="./assets/img/portfolio/img-18-candra.png" className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__image">
                            <img src="./assets/img/portfolio/img-18-candra.png" className="card-img"
                                alt="A black and white pencil drawing of Candra sitting in a window sill looking outward" />
                            <div className="ts-gallery__item-description">
                                <h6 className="ts-opacity__50">Self Portrait</h6>
                                <h4>Pencil Drawing</h4>
                            </div>
                        </div>
                    </a>
                    {/* <!-- JIMI HENDRIX GUITAR --> */}
                    <a href="./assets/img/portfolio/img-26-mixed-big.png"
                        className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__item-description">
                            <h6 className="ts-opacity__50">Jimi Hendrix/Fender</h6>
                            <h4>Custom Guitar Woodwork</h4>
                        </div>
                        <img src="./assets/img/portfolio/img-26-mixed-thumb.png" className="card-img"
                            alt="description" />
                    </a>

                    {/* <!-- DAVID BOWIE STICKER --> */}
                    <a href="./assets/img/portfolio/img-28-mixed-big.png"
                        className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__item-description">
                            <h6 className="ts-opacity__50">David Bowie</h6>
                            <h4>Digital Drawing/Sticker</h4>
                        </div>
                        <img src="./assets/img/portfolio/img-28-mixed-thumb.png" className="card-img"
                            alt="description" />
                    </a>
                    {/* <!-- FREDDIE MERCURY STICKER --> */}
                    <a href="./assets/img/portfolio/img-29-mixed-big.png"
                        className="card ts-gallery__item popup-image">
                        <div className="ts-gallery__item-description">
                            <h6 className="ts-opacity__50">Freddie Mercury</h6>
                            <h4>Digital Drawing/Sticker</h4>
                        </div>
                        <img src="./assets/img/portfolio/img-29-mixed-thumb.png" className="card-img"
                            alt="description" />
                    </a>
                </div>
                {/* <!-- end: card-columns --> */}

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
                        I specialize in a variety of creative services ranging from professional illustrations,
                        print-work to web development.
                        I'm proficient in the full Adobe Creative Suite, HTML 5, CSS, Javascript and several
                        other frameworks/libraries.

                    </p>
                    <a href="#contact" className="btn btn-outline-light mb-5">Contact Me</a>
                </div>
                {/* <!--end col-md-6--> */}
                <div className="col-md-6">
                    <div className="progress" data-progress-width="100%">
                        <h5 className="ts-progress-title">UX Design</h5>
                        <figure className="ts-progress-value"></figure>
                        <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0"
                            aria-valuemax="100"></div>
                    </div>
                    {/* <!--end progress--> */}
                    <div className="progress" data-progress-width="95%">
                        <h5 className="ts-progress-title">UI Development</h5>
                        <figure className="ts-progress-value"></figure>
                        <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0"
                            aria-valuemax="100"></div>
                    </div>
                    {/* <!--end progress--> */}
                    <div className="progress" data-progress-width="100%">
                        <h5 className="ts-progress-title">Adobe Creative Suite</h5>
                        <figure className="ts-progress-value"></figure>
                        <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0"
                            aria-valuemax="100"></div>
                    </div>
                    {/* <!--end progress--> */}
                    <div className="progress" data-progress-width="100%">
                        <h5 className="ts-progress-title">Prototyping & Wireframing</h5>
                        <figure className="ts-progress-value"></figure>
                        <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0"
                            aria-valuemax="100"></div>
                    </div>
                    {/* <!--end progress--> */}
                    <div className="progress" data-progress-width="99%">
                        <h5 className="ts-progress-title">Painting & Illustration</h5>
                        <figure className="ts-progress-value"></figure>
                        <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0"
                            aria-valuemax="100"></div>
                    </div>
                    {/* <!--end progress--> */}
                    <div className="progress" data-progress-width="80%">
                        <h5 className="ts-progress-title">Graphics & Crafting</h5>
                        <figure className="ts-progress-value"></figure>
                        <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0"
                            aria-valuemax="100"></div>
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
