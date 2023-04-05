function toNormal() {
    location.href = 'normal/index.html'
}
function toDisable() {
    location.href = 'disable/index.html'
}

const navbar = document.getElementById('navbar');
window.onscroll = () => {
    if (window.scrollY > 150) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};