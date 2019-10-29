menuIcon.onclick = function myFunction() {
    var x = document.getElementById('nav-menu');

    if (x.className === "nav__menu") {
        x.className += " responsive";
    } else {
        x.className = "nav__menu";
    }
}