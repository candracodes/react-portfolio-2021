
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// === IMPORT CSS PACKAGES === 
import 'bootstrap/dist/css/bootstrap.min.css'; // bootsrap v4
import '@fortawesome/fontawesome-free/css/all.min.css'; // fontawesome
import 'magnific-popup/dist/magnific-popup.css'; // magnific-popup
import 'odometer/themes/odometer-theme-default.css'; // odometer
import 'owl.carousel/dist/assets/owl.carousel.min.css'; // owl carousel
import './App.css'; // I took all of my original custom styles from style.css and pasted it into this location. Otherwise the styles compete

// === IMPORT JS PACKAGES ===
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js'; 
import 'imagesloaded/imagesloaded.pkgd.min.js';
import 'jquery-validation/dist/jquery.validate.min.js';
import 'odometer/odometer.min.js';
import 'owl.carousel/dist/owl.carousel.min.js';

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
