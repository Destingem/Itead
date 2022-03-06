
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

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("nadpis").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : +1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

animateValue("value", 1, 30, 1000);

function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : +1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

animateValue("value2", 1, 3500, 1);

function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : +1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

animateValue("value3", 1, 300, 5000);

function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : +1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

animateValue("value4", 1, 17, 2000);
