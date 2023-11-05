import React from "react";
import "../styles/login.css";
export default function Login() {
  return (
    <div>
      <nav class="navbar navbar-expand-md">
        <a class="navbar-brand" href="/">
          {" "}
          <p>Biye Shaadi</p>
        </a>
        <button
          class="navbar-toggler navbar-dark"
          type="button"
          data-toggle="collapse"
          data-target="/"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main-navigation">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/register">
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <header class="page-header header container-fluid">
        <div class="overlay">
          <div class="login">
            <form class="container1">
              <h1>Login</h1>

              <label for="email">
                <b>Email</b>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                required
              />
              <br />
              <label for="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />
              <br />

              <button type="submit" class="btn-outline-light">
                Login
              </button>
            </form>
          </div>
        </div>
      </header>
      <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12">
              <h6 class="text-uppercase font-weight-bold">
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
            <div class="col-lg-4 col-md-4 col-sm-12">
              <h6 class="text-uppercase font-weight-bold">Contact</h6>
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
        <div class="footer-copyright text-center">
          Developed by Suraiya Mahmuda , Lamia Binta Latif & Fatima Binta Aziz
        </div>
      </footer>
    </div>
  );
}
