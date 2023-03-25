/** @format */

const openIcon = document.querySelector(".head__img");
const closeIcon = document.querySelector(".mobnav__img");
const mobnav = document.querySelector(".mobnav");

openIcon.addEventListener("click", (event) => {
	openIcon.classList.add("head__img--hidden");
	mobnav.classList.add("mobnav--active");
});

closeIcon.addEventListener("click", (event) => {
	openIcon.classList.remove("head__img--hidden");
	mobnav.classList.remove("mobnav--active");
});
