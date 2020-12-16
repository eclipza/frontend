// JavaScript Document

var deButton = document.querySelector("header button:first-of-type");

deButton.addEventListener("click", openMenu);

function openMenu() {

    document.body.classList.toggle("menuOpen");
    
}