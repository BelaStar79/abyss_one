/* ========================================
   ABYSS — APPLICATION JAVASCRIPT
   Developed by Synth Ocean
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeNavigation();

    initializeFooterYear();

});


/* NAVIGATION */

function initializeNavigation() {

    const menuToggle = document.querySelector(".menu-toggle");

    const mainNav = document.querySelector(".main-nav");

    if (!menuToggle || !mainNav) {
        return;
    }

    function openMenu() {

        mainNav.classList.add("is-open");

        menuToggle.setAttribute("aria-expanded", "true");

        menuToggle.setAttribute("aria-label", "Close navigation");

    }

    function closeMenu() {

        mainNav.classList.remove("is-open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Open navigation");

    }

    function toggleMenu() {

        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }

    }

    menuToggle.addEventListener("click", toggleMenu);

    mainNav.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", closeMenu);

    });

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeMenu();
        }

    });

    window.addEventListener("resize", () => {

        if (window.innerWidth > 768) {
            closeMenu();
        }

    });

}


/* FOOTER YEAR */

function initializeFooterYear() {

    const yearElement = document.querySelector("[data-year]");

    if (!yearElement) {
        return;
    }

    yearElement.textContent = new Date().getFullYear();

}

