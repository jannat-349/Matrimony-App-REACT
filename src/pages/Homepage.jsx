import React from "react";
import "../styles/style.css";

export default function Homepage() {
  return (
    <div>
      <nav className="navbar navbar-expand-md">
        <a className="navbar-brand" href="/">
          Biye Shaadi
        </a>
        <button
          className="navbar-toggler navbar-dark"
          type="button"
          data-toggle="collapse"
          data-target="/"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-navigation">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/register">
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <header className="page-header header container-fluid">
        <div className="overlay"></div>
        <div className="description">
          <h1>Biye Shaadi</h1>
          <p>
            Biye Shaadi is a project developed by Suraiya Mahmuda, Lamia Binta
            Latif & Fatima Binta Aziz. which helps you to find your life partner
            and spread love. Click on the button and find your soulmate.
          </p>
          <a className="btn btn-outline-secondary btn-lg" href="/profiles">
            <h4>Profiles</h4>
          </a>
        </div>
      </header>
      <div className="container features">
        <h1 className="heading">Success Stories</h1>
        <br />
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <h3 className="feature-title">Richita & Shanto</h3>
            <img
              src="../images/richitapu.jpg"
              alt="Richita & Shanto"
              className="img-fluid"
            />
            <p>
              Richita & Shanto were the first couples who were engaged in Biye
              Shaadi (pun intended), by our platform. They both are students of
              Computer Science and Engineering at Jahangirnagar University, now
              happily married for two years and are expecting their first child.
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <h3 className="feature-title">Fardin & Shahanaj</h3>
            <img
              src="../images/successstory.jpg"
              alt="Fardin & Shahanaj"
              className="img-fluid"
            />
            <p>
              "Talking to him was like talking to my soul mate. Thank you, Biye
              Shaadi, for introducing us and making him a part of my life." -
              Shahanaj
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <h3 className="feature-title">Get in Touch!</h3>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name=""
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Your Message"
                rows="4"
              />
            </div>
            <input
              type="submit"
              className="btn btn-secondary btn-block"
              value="Send"
              name=""
            />
          </div>
        </div>
      </div>
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <h6 className="text-uppercase font-weight-bold">
                Additional Information
              </h6>
              <p>
                Biye Shaadi is a project of Web Design and Programming
                Laboratory-I course
                <br /> Course code: CSE-312
                <br />
                Supervised by Anup Majumder
                <br /> Assistant Professor
              </p>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12">
              <h6 className="text-uppercase font-weight-bold">Contact</h6>
              <p>
                Jahangirnagar University, Savar, Dhaka.
                <br />
                biyeshaadi@gmail.com
                <br />
                +880 *********
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center">
          Developed by Suraiya Mahmuda, Lamia Binta Latif & Fatima Binta Aziz
        </div>
      </footer>
    </div>
  );
}
