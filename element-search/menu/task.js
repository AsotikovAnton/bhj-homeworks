"use strict";

const menuLink = document.getElementsByClassName("menu__link");
const menuSub = document.getElementsByClassName("menu_sub");
const menuItem = document.querySelectorAll("ul.menu_sub");

// Костыльный метод, где вручную прописал индексы у двух выпадающих меню. Но если таких меню будет больше, то для каждого же не будешь прописывать...
// Ниже (с 30-й строки) пытался сделать универсальный вариант но не вышло.
for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = function() {        
        if (menuLink[i].nextElementSibling == menuItem[0]) {
            menuItem[0].className = "menu menu_sub menu_active";
            if (menuItem[1].className = "menu menu_sub menu_active") {
                menuItem[1].className = "menu menu_sub";
            }
            return false;
        }

        if (menuLink[i].nextElementSibling == menuItem[1]) {
            menuItem[1].className = "menu menu_sub menu_active";
            if (menuItem[0].className = "menu menu_sub menu_active") {
                menuItem[0].className = "menu menu_sub";
            }
            return false;
        }      
    }
}

// Меню выпадает, но при открытии второго, первое не скрывается.
// for (let i = 0; i < menuLink.length; i++) {
//     menuLink[i].onclick = function() {
//         if (menuLink[i].nextElementSibling.classList.contains("menu_sub")) {
//             menuLink[i].nextElementSibling.classList.toggle("menu_active");
//             return false;
//         }
//     }
// }
