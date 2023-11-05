import React from "react";
import "../styles/list.css";
export default function ListGroom() {
  return (
    <div>
      <nav className="navbar navbar-expand-md">
        <a className="navbar-brand" href="main.html">
          Biye Shaadi
        </a>
        <button
          className="navbar-toggler navbar-dark"
          type="button"
          data-toggle="collapse"
          data-target="#main-navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-navigation">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="main.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="login.html">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="register.html">
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section id="groom" className="section-b1">
        {/* Content for the groom section */}
      </section>
      <section id="groom1" className="section-b1">
        <h2>Find your soul mate here (GROOM)</h2>
        <div className="pro-container">
          <div className="pro">
            <a href="GroomProfile.html">
              <img src="images/Abrar.JPG" alt="Abrar" />
            </a>
            <h5>
              <a href="GroomProfile.html">Abrar Hamim</a>
            </h5>
            <p>
              "Some days are just bad days, that's all. You have to experience
              sadness to know happiness."
            </p>
          </div>

          <div className="pro">
            <a href="GroomProfile1.html">
              <img src="images/Adnan.JPG" alt="Adnan" />
            </a>
            <h5>
              <a href="GroomProfile1.html">S.I.M Adnan</a>
            </h5>
            <p>"I am who I am, and I'm proud of myself."</p>
          </div>

          <div className="pro">
            <a href="GroomProfile2.html">
              <img src="images/Jakey.JPG" alt="Jakey" />
            </a>
            <h5>
              <a href="GroomProfile2.html">Ali Jakey Shahriar</a>
            </h5>
            <p>
              "I look in the mirror and see a few scars, but I like myself."
            </p>
          </div>

          <div className="pro">
            <a href="GroomProfile3.html">
              <img src="images/Jubaer.JPG" alt="Jubaer" />
            </a>
            <h5>
              <a href="GroomProfile3.html">Jubaer Ahmed Khan</a>
            </h5>
            <p>"Every master was once a disaster."</p>
          </div>

          <div className="pro">
            <a href="GroomProfile4.html">
              <img src="images/Hasan.JPG" alt="Hasan" />
            </a>
            <h5>
              <a href="GroomProfile4.html">Hasan Al Mamun</a>
            </h5>
            <p>"I'm just myself. That's the best way to put it."</p>
          </div>

          <div className="pro">
            <a href="GroomProfile5.html">
              <img src="images/Taufiq.JPG" alt="Taufiq" />
            </a>
            <h5>
              <a href="GroomProfile5.html">Taufiq Islam</a>
            </h5>
            <p>"Life is what you make out of it."</p>
          </div>

          <div className="pro">
            <a href="GroomProfile6.html">
              <img src="images/Tamjid.JPG" alt="Tamjid" />
            </a>
            <h5>
              <a href="GroomProfile6.html">Tamjid Islam</a>
            </h5>
            <p>"Everything has BEAUTY, but not everyone sees it."</p>
          </div>

          <div className="pro">
            <a href="GroomProfile7.html">
              <img src="images/Rubayed.JPG" alt="Rubayed" />
            </a>
            <h5>
              <a href="GroomProfile7.html">Rubayed Islam</a>
            </h5>
            <p>"Opportunities don’t happen, you create them."</p>
          </div>
        </div>
      </section>
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
            <div className="col-lg-4 col-md-4 col-sm-12">
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
