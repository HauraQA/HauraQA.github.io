window.addEventListener("DOMContentLoaded", function () {

    const logo = document.getElementById("logo-img");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            logo.src = "images/logo.png";   // on scroll
        } else {
            logo.src = "images/logo-white.png";   // at top
        }
    });

});
