"use strict";


const header = document.querySelector("header");
const nav = document.querySelector("nav");
const navbarMenuButton = document.querySelector(".navbar-menu-button");

const navbarForm = document.querySelector(".navbar-form");
const navbarFormCloseButton = document.querySelector(".navbar-form-close");
const navbarSearchButton = document.querySelector(".navbar-search-button");
const navbarFormButton = document.querySelector(".navbar-form-button");

function navIsActive() {
  header.classList.toggle("active");
  nav.classList.toggle("active");
  navbarMenuButton.classList.toggle("active");
}

navbarMenuButton.addEventListener("click", navIsActive);

const searchBarIsActive = () => navbarForm.classList.toggle("active");

navbarSearchButton.addEventListener("click", searchBarIsActive);
navbarFormCloseButton.addEventListener("click", searchBarIsActive);


