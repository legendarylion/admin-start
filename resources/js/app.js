import './bootstrap';

// Import Materialize
// import 'materialize-css/dist/css/materialize.min.css';
// import 'materialize-css/dist/js/materialize.min.js';


document.addEventListener("DOMContentLoaded", function () {

    const toggleSidebarButton = document.getElementById("toggleSidebar");
    const desktopSidebar = document.getElementById("desktop-sidebar");
    const contentContainer = document.querySelector(".content-container");

    // Initialize
    desktopSidebar.style.transform = "translateX(0)";
    contentContainer.style.marginLeft = "250px";  /* As wide as the sidebar */

    toggleSidebarButton.addEventListener("click", function () {
        if (desktopSidebar.style.transform === "translateX(-100%)") {
            desktopSidebar.style.transform = "translateX(0)";
            contentContainer.style.marginLeft = "250px";  /* Make space for sidebar again */
        } else {
            desktopSidebar.style.transform = "translateX(-100%)";  /* Hide sidebar */
            contentContainer.style.marginLeft = "0";  /* Remove the space for sidebar */
        }
    });





    // Submenu
    const menuItems = document.querySelectorAll('.has-submenu');
    menuItems.forEach((item) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const submenu = this.querySelector('.submenu');
            const icon = this.querySelector('.submenu-icon');

            if (submenu.style.maxHeight === "0px" || !submenu.style.maxHeight) {
                submenu.style.maxHeight = submenu.scrollHeight + "px";
                icon.classList.add("rotate-icon");
            } else {
                submenu.style.maxHeight = "0px";
                icon.classList.remove("rotate-icon");
            }
        });
    });
});



// Alpine.js
import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();
