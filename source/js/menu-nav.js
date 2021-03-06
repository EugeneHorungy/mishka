const navButton = document.querySelector(".nav__button")
const siteList = document.querySelector(".site-list")
const userList = document.querySelector(".user-list")

navButton.classList.remove("visually-hidden");
siteList.classList.add("site-list--js");
userList.classList.add("user-list--js");

navButton.addEventListener("click", (evt) => {
  siteList.classList.toggle("site-list--js");
  userList.classList.toggle("user-list--js");
  navButton.classList.toggle("nav__button--closed");
  navButton.classList.toggle("nav__button--opened");
});
