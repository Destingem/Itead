// Navigation
const dropdownItems = document.querySelectorAll('.dropdown-hover')


if (window.innerWidth < 1000) {
  const menuIcon = document.querySelector('.menu')
  const navbar = document.querySelector('.navbar')

  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change')

    if (!navbar.classList.contains('change')) {
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
      document.querySelector('.nav-logo-image').style.filter = "invert(50%) brightness(3)";
      document.querySelector('.navbar-wrapper').style.background = 'linear-gradient(to right, #066399, #2f8fdf, #066399)'
      dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(180deg)'
    })
    dropdownItem.addEventListener('mouseout', () => {
      dropdownItem.lastElementChild.style.cssText = 'opacity: 0; visibility: hidden'
      document.querySelector('.navbar-wrapper').style.background = 'none'
      document.querySelector('.nav-logo-image').style.filter = "invert(0)";
      dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(0)'
      document.querySelector('.navbar-btn').style.border = 'none';
      document.querySelector('.navbar-btn').style.borderBottom = '.1rem solid #fff';
    })
  })
}



var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
});

typewriter
  .stop();


function animateValue(id, start, end, duration) {
  // assumes integer values for start and end

  var obj = document.getElementById(id);
  var range = end - start;
  // no timer shorter than 50ms (not really visible any way)
  var minTimer = 50;
  // calc step time to show all interediate values
  var stepTime = Math.abs(Math.floor(duration / range));

  // never go below minTimer
  stepTime = Math.max(stepTime, minTimer);

  // get current time and calculate desired end time
  var startTime = new Date().getTime();
  var endTime = startTime + duration;
  var timer;

  function run() {
    var now = new Date().getTime();
    var remaining = Math.max((endTime - now) / duration, 0);
    var value = Math.round(end - (remaining * range));
    obj.innerHTML = value;
    if (value == end) {
      clearInterval(timer);
    }
  }

  timer = setInterval(run, stepTime);
  run();
}

animateValue("value", 1, 30, 3000);

animateValue("value2", 3200, 3500, 3000);

animateValue("value3", 1, 300, 3000);

animateValue("value4", 1, 17, 3000);
var map = new L.map('map').setView([49.8167003, 15.4749544], 6.5);
mapLink =
  '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
  'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    maxZoom: 18,
  }).addTo(map);

var marker = L.marker([50.0380945, 15.7701927], {
    title: "Sídlo společnosti, Pardubice"
  })
  .addTo(map)
  .bindPopup('<h1 class="mapa-pobocka-heading">Pobočka</h1><p class="mapa-pobocka-adresa">Masarykovo nám. 1484, 530 02 Pardubice</p><p class="mapa-pobocka-email"><a href="mailto:itead@itead.cz"></a>itead@itead.cz</p><p class="mapa-pobocka-telefon"><a href="+605 987 654"></a>605 987 654</p><img src="/images/sidlo_pardubice.jpg" alt="Sídlo Pardubice" class="mapa-pobocka-nahled">');

var marker2 = L.marker([50.0755916, 14.4379635], {
    title: "Pobočka společnosti, Praha"
  })
  .addTo(map)
  .bindPopup('<h1 class="mapa-pobocka-heading">Pobočka A</h1><p class="mapa-pobocka-adresa">Masarykovo nám. 1484, 530 02 Pardubice</p><p class="mapa-pobocka-email"><a href="mailto:itead@itead.cz"></a>itead@itead.cz</p><p class="mapa-pobocka-telefon"><a href="+605 987 654"></a>605 987 654</p>')
var marker3 = L.marker([49.6040921, 17.2413196], {
    title: "Pobočka společnosti, Praha"
  })
  .addTo(map)
  .bindPopup('<h1 class="mapa-pobocka-heading">Pobočka B</h1><p class="mapa-pobocka-adresa">Masarykovo nám. 1484, 530 02 Pardubice</p><p class="mapa-pobocka-email"><a href="mailto:itead@itead.cz"></a>itead@itead.cz</p><p class="mapa-pobocka-telefon"><a href="+605 987 654"></a>605 987 654</p>')
var marker4 = L.marker([49.2678979, 13.9198834], {
    title: "Pobočka společnosti, Praha"
  })
  .addTo(map)
  .bindPopup('<h1 class="mapa-pobocka-heading">Pobočka C</h1><p class="mapa-pobocka-adresa">Masarykovo nám. 1484, 530 02 Pardubice</p><p class="mapa-pobocka-email"><a href="mailto:itead@itead.cz"></a>itead@itead.cz</p><p class="mapa-pobocka-telefon"><a href="+605 987 654"></a>605 987 654</p>')
var marker5 = L.marker([49.1968173, 16.6187722], {
    title: "Pobočka společnosti, Praha"
  })
  .addTo(map)
  .bindPopup('<h1 class="mapa-pobocka-heading">Pobočka Brno</h1><p class="mapa-pobocka-adresa">Masarykovo nám. 1484, 530 02 Pardubice</p><p class="mapa-pobocka-email"><a href="mailto:itead@itead.cz"></a>itead@itead.cz</p><p class="mapa-pobocka-telefon"><a href="+605 987 654"></a>605 987 654</p><img src="/images/pobocka_brno.jpg" alt="Pobočka Brno" class="mapa-pobocka-nahled">')
var marker6 = L.marker([49.2662501,13.9137016], {
    title: "Pobočka společnosti, Praha"
  })
  .addTo(map)
  .bindPopup('<h1 class="mapa-pobocka-heading">Pobočka E</h1><p class="mapa-pobocka-adresa">Masarykovo nám. 1484, 530 02 Pardubice</p><p class="mapa-pobocka-email"><a href="mailto:itead@itead.cz"></a>itead@itead.cz</p><p class="mapa-pobocka-telefon"><a href="+605 987 654"></a>605 987 654</p>')
