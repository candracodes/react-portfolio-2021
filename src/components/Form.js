import React, { useState } from "react";
import wall from "../assets/img/bg-man-wall.jpg"; // bluish gray background color

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../utils/helpers";

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
//   const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
//   const [password, setPassword] = useState("");
const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "message") {
        setMessage(inputValue);
    } else if (inputType === "name") {
        setName(inputValue);
    }
    // } else if (inputType === "userName") {
    //   setUserName(inputValue);} 
    // else {
    //     setName(inputValue);
    // }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !message || !name) {
      setErrorMessage("Email invalid or message/name is empty");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    };

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setMessage("");
    setName("");
    setEmail("");
  };

  return (
    <footer id="ts-footer" className="mt-5">
      <section
        id="contact"
        className="ts-block ts-separate-bg-element"
        data-bg-image={wall}
        data-bg-image-opacity=".1"
      >
        <div className="container">
          <div className="ts-title">
            <h2 className="ts-bubble-border">Contact</h2>
          </div>
          {/* ================== START FORM ================== */}
          <div>
            <form className="form">
                {/* NAME */}
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input value={name} name="name" type="text" className="form-control" placeholder="Your First and Last Name" onChange={handleInputChange} />
                </div>
                {/* EMAIL */}
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input value={email} name="email" type="email" className="form-control" placeholder="name@example.com" onChange={handleInputChange} />
                </div>
                {/* MESSAGE */}
                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea value={message} name="message" type="text" className="form-control" placeholder="Leave me a message" onChange={handleInputChange} rows="3" />
                </div>

              <button type="button" onClick={handleFormSubmit} className="btn btn-primary mb-3">
                Submit
              </button>
            </form>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
          </div>
          <hr className="ts-hr-light mb-5" />

          {/* ================== END FORM ================== */}

          {/* THESE ARE THE SOCIAL ICONS */}
          <div className="row ts-xs-text-center ">
            {/* <!-- start: ICON 1 --> */}
            <div className="col-sm-6 col-md-3 mb-4">
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
            <div className="col-sm-6 col-md-3 mb-4">
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
            <div className="col-sm-6 col-md-3 mb-4">
              <i
                className="fab fa-linkedin mb-4 footer-icon"
                alt="A pink LinkedIn icon"
              ></i>
              <h5>LinkedIn</h5>
              <div className="ts-opacity__50">
                <figure className="mb-0">
                  <a
                    href="https://www.linkedin.com/in/candracook/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Profile
                  </a>
                </figure>
              </div>
              {/* <!--end ts-opacity__50--> */}
            </div>
            {/* <!-- start: ICON 3 --> */}

            {/* <!-- start: ICON 4 --> */}
            <div className="col-sm-6 col-md-3 mb-4">
              <i
                className="fab fa-github mb-4 footer-icon"
                alt="A pink LinkedIn icon"
              ></i>
              <h5>Github</h5>
              <div className="ts-opacity__50">
                <figure className="mb-0">
                  <a
                    href="https://github.com/candracodes"
                    target="_blank"
                    rel="noreferrer"
                  >
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
    </footer>
  );
}

export default Form;
