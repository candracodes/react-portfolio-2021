
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // I took all of my original custom styles from style.css and pasted it into this location. Otherwise the styles compete
// TODO: install and import the following:
// (CSS)
// - Fontawesome v5.10.0
// - magnific-popup.js/1.1.0/magnific-popup.css
// - odometer.js/0.4.8/themes/odometer-theme-default.css
// - OwlCarousel2/2.3.4/owl.carousel.min.js
// (JAVASCRIPT)
// - jquery-3.3.1.min.js
// - popper.min.js
// - bootstrap/js/bootstrap.min.js
// - imagesloaded.pkgd.min.js
// - isInViewport.jquery.min.js
// - jquery.magnific-popup.min.js
// - scrolla.jquery.min.js
// - jquery.validate.min.js
// - jquery-validate.bootstrap-tooltip.min.js
// - odometer.min.js
// - owl.carousel.min.js


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
