"use strict";

const modalMain = document.getElementById("modal_main");
modalMain.className = "modal modal_active";

const modalClose = document.getElementsByClassName("modal__close");
const firstModalClose = modalClose[0];
firstModalClose.onclick = function() {
    modalMain.className = "modal";
}

const showSuccess = document.getElementsByClassName("show-success");
const modalSuccess = document.getElementById("modal_success");
showSuccess[0].onclick = function() {
    modalSuccess.className = "modal modal_active";
    modalMain.className = "modal";
}

const secondModalClose = modalClose[2];
secondModalClose.onclick = function() {
    modalSuccess.className = "modal";
}

const btnSuccess = document.getElementsByClassName("btn_success");
btnSuccess[0].onclick = function() {
    modalSuccess.className = "modal";
}