
function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
}
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
