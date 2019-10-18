"use strict";

const timer = document.getElementById("timer");
const timerTick = function() {
    if (timer.textContent == 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(interval);        
    } else {
        timer.textContent--;
    }
}

let interval = setInterval(timerTick, 1000);