import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        className="offcanvas offcanvas-bottom"
        tabIndex="-1"
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
      >
        <div className="offcanvas-header pb-0">
          <h5 className="offcanvas-title" id="offcanvasBottomLabel">
            Movie Info App
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body small">
          <footer className="text-center text-white"  style={{"backgroundColor":"#1c0070"}}>
            <div className="container p-4">
              <section className="mb-4">
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  role="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  role="button"
                >
                  <i className="fab fa-twitter"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://www.google.com/"
                  target="_blank"
                  rel="noreferrer"
                  role="button"
                >
                  <i className="fab fa-google"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  role="button"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  role="button"
                >
                  <i className="fab fa-github"></i>
                </a>
              </section>
            </div>

            <div className="text-center p-3" style={{"backgroundColor":"#1c0070","borderTop":"1px solid #ffffff"}}>
              © 2022 Copyright:
              <a className="text-white" href="/">
                Movie Info App
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
