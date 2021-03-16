'use strict'
// Header btn
function myFunction( x, y) {
x.classList.toggle("second__btn_active")
let scrollActive = document.querySelector(y);
scrollActive.classList.toggle("scroll-active");
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
