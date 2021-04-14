'use strict'
// Header btn
let btn = document.querySelectorAll('.second__btn')
  btn.forEach(el => {
    el.addEventListener('click', myFunction)
    let active = document.getElementById(el.name)
    function myFunction() {
      el.classList.toggle("second__btn_active")
      active.classList.toggle("scroll-active")

      window.onclick = function(event) {
        if (!event.target.matches('.second__btn')) {

          var dropdowns = document.getElementsByClassName("customScroll");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('scroll-active')) {
              openDropdown.classList.remove('scroll-active');
              el.classList.remove('second__btn_active');
            }
          }
        }
      }
    }
  })



// Скролл
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if(menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      })
      e.preventDefault();
    }
  }
}
// Accordion
$( function() {
$( "#accordion" ).accordion();
} );

// Map
ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.7570333262053,37.61064017142446],
        zoom: 16
    });
    var myPlacemark = new ymaps.Placemark([55.75846197042374,37.60108483061907], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/contacts/map-marker.svg',
      iconImageSize: [28, 40],
      iconImageOffset: [-14, -40]
  });
myMap.geoObjects.add(myPlacemark);
}
// Select
  const element = document.querySelector('.gallery__select');
  const choices = new Choices(element,{searchEnabled: false,itemSelectText: '',shouldSort: false});