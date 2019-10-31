"use strict";

const reader = document.getElementById("book");
const fontSize = document.querySelectorAll(".font-size")

for (let i = 0; i < fontSize.length; i++) {
    fontSize[i].addEventListener("click", function() {
        event.preventDefault();
        for (let j = 0; j < fontSize.length; j++) {
            fontSize[j].classList.remove("font-size_active");

            if (reader.classList.contains("book_fs-big")) {
                reader.classList.remove("book_fs-big");
            }

            if (reader.classList.contains("book_fs-small")) {
                reader.classList.remove("book_fs-small");
            }
        }

        fontSize[i].classList.add("font-size_active");

        if (fontSize[0].classList.contains("font-size_active")) {
            reader.classList.add("book_fs-small");
        }

        if (fontSize[2].classList.contains("font-size_active")) {
            reader.classList.add("book_fs-big");
        }
    });
}