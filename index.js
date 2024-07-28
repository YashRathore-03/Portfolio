const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    menu.classList.toggle('show');
    hamIcon.classList.toggle('show');
    crossIcon.classList.toggle('show');
});
