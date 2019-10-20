"use strict";

const sliderArrowPrev = document.getElementsByClassName("slider__arrow_prev");
const arrowPrev = sliderArrowPrev[0];

const sliderArrowNext = document.getElementsByClassName("slider__arrow_next");
const arrowNext = sliderArrowNext[0];

let slideNumber = 0;
const images = document.getElementsByClassName("slider__item");
let image = images[slideNumber];

arrowNext.onclick = function() {
    if (slideNumber >= 0 && slideNumber < images.length - 1) {
        slideNumber++;
        image = images[slideNumber - 1];
        image.classList.remove("slider__item_active");
        image = images[slideNumber];
        image.classList.add("slider__item_active");
    } else {
        slideNumber = 0;
        image = images[slideNumber];
        image.classList.add("slider__item_active");
        for (let i = 1; i < 5; i++) {
            image = images[slideNumber + i];
            image.classList.remove("slider__item_active");
        }
    }
}

arrowPrev.onclick = function() {
    if (slideNumber > 0 && slideNumber < images.length) {
        slideNumber--;
        image = images[slideNumber + 1];
        image.classList.remove("slider__item_active");
        image = images[slideNumber];
        image.classList.add("slider__item_active");
    } else {
        slideNumber = images.length - 1;
        image = images[0];
        image.classList.remove("slider__item_active");
        image = images[slideNumber];
        image.classList.add("slider__item_active");        
    }         
}