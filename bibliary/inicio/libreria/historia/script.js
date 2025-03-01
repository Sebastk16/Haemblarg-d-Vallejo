document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav ul.menu");
    const submenuItems = document.querySelectorAll("nav ul.menu li.submenu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("show");
        menuToggle.classList.toggle("active");
    });

    submenuItems.forEach(item => {
        item.addEventListener("click", function () {
            this.classList.toggle("open");
        });
    });
});
