// menuIcon.onclick = function myFunction() {
//     var x = document.getElementById('nav-menu');

//     if (x.className === "nav__menu") {
//         x.className += " responsive";
//     } else {
//         x.className = "nav__menu";
//     }
// }

const menuButton = document.querySelector(".menu-icon");
const menuList = document.querySelector(".nav__menu");

menuButton.addEventListener("click", () => {
    menuList.classList.toggle("responsive");
});

const menu_ = document.querySelector('.nav');
const scrollspy = new VanillaScrollspy(menu_);
scrollspy.init();

const menuLinks = document.querySelectorAll(".menu__link");
menuLinks.forEach(item => {
    item.addEventListener("click", () => {
        menuList.classList.remove("responsive");
    });
});