function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

window.addEventListener('scroll', function() {
    var goTopButton = document.querySelector('.go-top');
    if (window.pageYOffset > 100) { // Adjust this value as needed
        goTopButton.classList.add('show');
    } else {
        goTopButton.classList.remove('show');
    }
});