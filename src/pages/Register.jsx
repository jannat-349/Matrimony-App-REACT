import React from "react";
import "../styles/register.css";
export default function Register() {
  return (
    <div>
      <nav class="navbar navbar-expand-md">
        <a class="navbar-brand" href="main.html">
          Biye Shaadi
        </a>
        <button
          class="navbar-toggler navbar-dark"
          type="button"
          data-toggle="collapse"
          data-target="#main-navigation"
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
              <a class="nav-link" href="register">
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <header class="page-header header container-fluid">
        <div class="overlay"></div>
        <div class="description">
          <h1>Register</h1>
          <p>
            Register to the platform and get started on the journey to find your
            soulmate, and add your story to list of other hisghly successful and
            lovely Wedding stories.
          </p>
          <button class="btn btn-outline-secondary btn-lg">Register</button>
        </div>
      </header>
      <div class="container">
        <form class="form-horizontal" role="form">
          <h2>Registration</h2>
          <div class="form-group">
            <label for="firstName" class="col-sm-3 control-label">
              First Name
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                class="form-control"
                autofocus
              />
            </div>
          </div>
          <div class="form-group">
            <label for="lastName" class="col-sm-3 control-label">
              Last Name
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                class="form-control"
                autofocus
              />
            </div>
          </div>
          <div class="form-group">
            <label for="email" class="col-sm-3 control-label">
              Email
            </label>
            <div class="col-sm-9">
              <input
                type="email"
                id="email"
                placeholder="Email"
                class="form-control"
                name="email"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="password" class="col-sm-3 control-label">
              Password
            </label>
            <div class="col-sm-9">
              <input
                type="password"
                id="password"
                placeholder="Password"
                class="form-control"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="password" class="col-sm-3 control-label">
              Confirm Password
            </label>
            <div class="col-sm-9">
              <input
                type="password"
                id="password"
                placeholder="Password"
                class="form-control"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="birthDate" class="col-sm-3 control-label">
              Date of Birth*
            </label>
            <div class="col-sm-9">
              <input type="date" id="birthDate" class="form-control" />
            </div>
          </div>
          <div class="form-group">
            <label for="phoneNumber" class="col-sm-3 control-label">
              Phone number{" "}
            </label>
            <div class="col-sm-9">
              <input
                type="phoneNumber"
                id="phoneNumber"
                placeholder="Phone number"
                class="form-control"
              />
              <span class="help-block">
                Your phone number won't be disclosed anywhere{" "}
              </span>
            </div>
          </div>
          <div class="form-group">
            <label for="Height" class="col-sm-3 control-label">
              Height*{" "}
            </label>
            <div class="col-sm-9">
              <input
                type="number"
                id="height"
                placeholder="Please write your height in centimetres"
                class="form-control"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="home" class="col-sm-3 control-label">
              Home District*{" "}
            </label>
            <div class="col-sm-9">
              <input
                type="number"
                id="home"
                placeholder="Please enter your home district"
                class="form-control"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-3">Gender</label>
            <div class="col-sm-6">
              <div class="row">
                <div class="col-sm-4">
                  <label class="radio-inline">
                    <input type="radio" id="femaleRadio" value="Female" />
                    Female
                  </label>
                </div>
                <div class="col-sm-4">
                  <label class="radio-inline">
                    <input type="radio" id="maleRadio" value="Male" />
                    Male
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-9 col-sm-offset-3">
              <span class="help-block">*Required fields</span>
            </div>
          </div>
          <button type="submit" class="btn btn-outline-secondary btn-lg">
            Register
          </button>
        </form>
      </div>
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
