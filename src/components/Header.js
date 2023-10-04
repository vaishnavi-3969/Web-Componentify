import React from "react";
import "../Css/Header.css";

const Header = () => {
  return (
    <header>
      <section class="header-content">
        <h1 class="brand-logo">
          <a href="#" class="logo">
            <i class="fa-solid fa-globe"></i>
            <span class="logo-text">LOGO</span>
          </a>
        </h1>
        <nav role="navigation">
          <ul class="navigation__list-container" data-visible="true">
            <li class="nav__item">
              <a class="nav__link" href="#">
                Home
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#">
                About
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#">
                Products
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#">
                Links
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
