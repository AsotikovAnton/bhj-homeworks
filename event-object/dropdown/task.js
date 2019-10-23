"use strict";

const dropdownLink = document.querySelector("div.dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItems = document.getElementsByClassName("dropdown__item");

dropdownLink.addEventListener("click", function() {
    dropdownList.classList.add("dropdown__list_active");
    event.preventDefault();
});

for (let i = 0; i < dropdownItems.length; i++) {
    dropdownItems[i].addEventListener("click", function() {
        dropdownList.classList.remove("dropdown__list_active");
        dropdownLink.textContent = dropdownItems[i].textContent;
        event.preventDefault();
    });
}