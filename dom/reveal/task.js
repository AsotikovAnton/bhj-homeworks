"use strict";

const reveals = document.querySelectorAll(".reveal");
const viewportHeight = window.innerHeight;

const isInViewport = function() {
    for (let reveal of reveals) {
        if ((reveal.getBoundingClientRect().top < viewportHeight) && (reveal.getBoundingClientRect().bottom > 0)) {
            reveal.classList.add("reveal_active");
        } else {
            reveal.classList.remove("reveal_active");
        }
    }
}

document.addEventListener("scroll", isInViewport);