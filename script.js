document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    menuBtn.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
/*pour le bouton de navigation*/
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Optionnel : Animation des barres du hamburger en croix (X)
            mobileMenu.classList.toggle('is-active');
        });
    }
});