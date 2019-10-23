"use strict";

const tabs = document.getElementsByClassName("tab");
const tabContent = document.getElementsByClassName("tab__content");

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function() {
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove("tab_active");
            tabContent[j].classList.remove("tab__content_active");
        }
        
        tabs[i].classList.add("tab_active");
        tabContent[i].classList.add("tab__content_active");
    });
}