"use strict";

const interestCheck = document.querySelectorAll(".interest__check");
const foodCheck = interestCheck[0];
const patsCheck = interestCheck[3];

foodCheck.addEventListener("change", event => {
    if (foodCheck.checked) {
        interestCheck[1].checked = true;
        interestCheck[2].checked = true;
    } else {
        interestCheck[1].checked = false;
        interestCheck[2].checked = false;
    }
});

patsCheck.addEventListener("change", event => {
    if (patsCheck.checked) {
        interestCheck[4].checked = true;
        interestCheck[5].checked = true;
    } else {
        interestCheck[4].checked = false;
        interestCheck[5].checked = false;
    }
});