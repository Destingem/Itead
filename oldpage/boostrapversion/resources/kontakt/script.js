
// Navigation
const dropdownItems = document.querySelectorAll('.dropdown-hover')


if(window.innerWidth < 1000) {
    const menuIcon = document.querySelector('.menu')
    const navbar = document.querySelector('.navbar')

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('change')

        if(!navbar.classList.contains('change')) {
            document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
                dropdown.style.left = '-20rem'
            })
        }
    })

    document.querySelectorAll('.show-dropdown').forEach(link => {
        link.addEventListener('click', () => {
            link.nextElementSibling.style.left = '0'
        })
    })

    document.querySelectorAll('.dropdown-heading-link').forEach(headingLink => {
        headingLink.addEventListener('click', () => {
            headingLink.parentElement.parentElement.style.left = '-20rem'
        })
    })
} else {
    dropdownItems.forEach(dropdownItem => {
        dropdownItem.addEventListener('mouseover', () => {
            dropdownItem.lastElementChild.style.cssText = 'opacity: 1; visibility: visible'
            document.querySelector('.navbar-btn').style.border = '0.1rem solid #fff';
            document.querySelector('.nav-logo-image').style.filter="invert(50%) brightness(3)";
            document.querySelector('.navbar-wrapper').style.background = 'linear-gradient(to right, #066399, #2f8fdf, #066399)'
            dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(180deg)'
        })
        dropdownItem.addEventListener('mouseout', () => {
            dropdownItem.lastElementChild.style.cssText = 'opacity: 0; visibility: hidden'
            document.querySelector('.navbar-wrapper').style.background = 'none'
            document.querySelector('.nav-logo-image').style.filter="invert(0)";
            dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(0)'
            document.querySelector('.navbar-btn').style.border = '.1rem solid #2978b5';
        })
    })
}


var i = 0;
var txt = 'Rostete spolu s námi.';
var speed = 80;
var locations = [
  ["Sídlo společnosti Pardubice", 50.0380945, 15.7701927],
  ["Regionální pobočka Praha", 50.0755916, 14.4379635],
  ["Regionální pobočka Olomouc", 49.6040921, 17.2413196],
  ["Regionální pobočka Strakonice", 49.2678979, 13.9198834],
  ["Regionální pobočka Brno", 49.1968173, 16.6187722],


];

var map = L.map('map').setView([49.8167003, 15.4749544], 6.5);
mapLink =
  '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
  'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  
    maxZoom: 18,
  }).addTo(map);

for (var i = 0; i < locations.length; i++) {
  marker = new L.marker([locations[i][1], locations[i][2]])
    .bindPopup(locations[i][0])
    .addTo(map);
}
