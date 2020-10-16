$(document).ready(function() {
    $('#nav').load("nav.html");
});

const navigation = document.getElementById('navbar');
const menuButton = document.getElementById('menu-button');

menuButton.addEventListener('click', event => {
    navigation.classList.toggle('open');
    // prevents from going up in hierarchy
    event.stopPropagation();
});

document.addEventListener('click', () => {
    navigation.classList.remove('open');
});
