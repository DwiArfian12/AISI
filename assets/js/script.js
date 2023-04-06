function toNormal() {
    location.href = 'normal/index.html'
}
function toDisable() {
    location.href = 'disable/index.html'
}

function enterKeyPressed(event) {
    if (event.keyCode == 49) {
       location.href = 'normal/index.html'
    } else if (event.keyCode == 50) {
      location.href = 'disable/index.html'
    } 
 }
function back(event) {
    if (event.keyCode == 48) {
       location.href = '../../index.html'
    }
 }

const navbar = document.getElementById('navbar');
window.onscroll = () => {
    if (window.scrollY > 150) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};