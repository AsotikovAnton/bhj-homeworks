"use strict";

const rotator = document.getElementsByClassName("rotator__case");
const firstCase = rotator.item(0);
const lastCase = rotator.item(rotator.length - 1);

const getRotator = function() {
    const caseActive = document.querySelector(".rotator__case_active");
    const nextCaseActive = caseActive.nextElementSibling;

    if (nextCaseActive == null) {
        firstCase.classList.add("rotator__case_active");
        lastCase.classList.remove("rotator__case_active");
    } else {
        caseActive.classList.remove("rotator__case_active");
        nextCaseActive.classList.add("rotator__case_active");
    }
}

let rotatorText = setInterval(getRotator, 1000);