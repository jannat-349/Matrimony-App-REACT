import React from "react";
import "../styles/list.css";

export default function ListBride() {
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

      <section id="bride" className="section-b1"></section>

      <section id="bride1" className="section-b1">
        <h2>Find your soul mate here (BRIDE)</h2>
        <div className="pro-container">
          <div className="pro">
            <a href="BrideProfile.html">
              <img
                src="/matrimony-client-app/src/images/Totinee.JPG"
                alt="Totinee"
              />
            </a>
            <h5>
              <a href="/brideProfile">Hasneen Tamanna Totinee</a>
            </h5>
            <p>
              "I just find myself happy with the simple things. Appreciating the
              blessings God gave me."
            </p>
          </div>
          <div className="pro">
            <a href="GroomProfile1.html">
              <img src="images/Yumna.JPG" alt="Yumna" />
            </a>
            <h5>
              <a href="GroomProfile1.html">Yumna Tasneem</a>
            </h5>
            <p>"Every story I create, creates me. I write to create myself."</p>
          </div>

          <div className="pro">
            <a href="GroomProfile2.html">
              <img src="images/Subarna.JPG" alt="Subarna" />
            </a>
            <h5>
              <a href="GroomProfile2.html">Subarna Saha</a>
            </h5>
            <p>"I restore myself when I'm alone."</p>
          </div>

          <div className="pro">
            <a href="GroomProfile3.html">
              <img src="images/Ahona.JPG" alt="Ahona" />
            </a>
            <h5>
              <a href="GroomProfile3.html">Irtifa Haider Ahona</a>
            </h5>
            <p>
              "I'm having fun. I'm being myself. I'm doing what I love. That's
              all that matters."
            </p>
          </div>

          <div className="pro">
            <a href="GroomProfile4.html">
              <img src="images/Suraiya.JPG" alt="Suraiya" />
            </a>
            <h5>
              <a href="GroomProfile4.html">Suraiya Mahmuda</a>
            </h5>
            <p>"I'm a blessing to whoever gets to really know me."</p>
          </div>

          <div className="pro">
            <a href="GroomProfile5.html">
              <img src="images/Lamiaaa.jpg" alt="Lamia" />
            </a>
            <h5>
              <a href="GroomProfile5.html">Lamia Binta Latif</a>
            </h5>
            <p>"Being real is what keeps me humble."</p>
          </div>

          <div className="pro">
            <a href="GroomProfile6.html">
              <img src="images/Fatima.JPG" alt="Srijoni" />
            </a>
            <h5>
              <a href="GroomProfile6.html">Fatima Binta Aziz</a>
            </h5>
            <p>
              "The way I see it if you want a rainbow, you have to put up with
              rain."
            </p>
          </div>

          <div className="pro">
            <a href="GroomProfile7.html">
              <img src="../images/Shanjida.JPG" alt="Shanjida" />
            </a>
            <h5>
              <a href="GroomProfile7.html">Shanjida Alam</a>
            </h5>
            <p>
              "I'm not trying to be different. To me, I'm just being myself."
            </p>
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
                <br /> Supervised by Anup Majumder
                <br /> Assistant Professor
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <h6 className="text-uppercase font-weight-bold">Contact</h6>
              <p>
                Jahangirnagar University, Savar, Dhaka.
                <br /> biyeshaadi@gmail.com
                <br /> +880 *********
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
