import React from "react";

export default function Footer() {
  return (
    <footer id="ts-footer" className="mt-5">

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
