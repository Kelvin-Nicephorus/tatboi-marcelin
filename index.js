

const navbarToggle = document.querySelector('.navbar-toggle');
const menus  = document.querySelector('.menus');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    menus.classList.toggle('active');
});



const backToTop = document.getElementById("backToTop");

// Show the button after scrolling down
window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

// Scroll smoothly to the top when clicked
backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



