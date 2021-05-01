'use strict'
// Header btn
let btn = document.querySelectorAll('.second__btn')
  btn.forEach(el => {
    el.addEventListener('click', myFunction)
    let active = document.getElementById(el.name)
    function myFunction() {
      if(el.matches('.second__btn_active')){
        el.classList.remove('second__btn_active')
        active.classList.remove("scroll-active")
      } else{
        btn.forEach(el1 => {
          let active = document.getElementById(el1.name)
          el1.classList.remove('second__btn_active')
          active.classList.remove("scroll-active")
        })
        el.classList.toggle("second__btn_active")
        active.classList.toggle("scroll-active")
      }
      window.onclick = function(event) {
        if (!event.target.matches('.second__btn')) {
          var dropdowns = document.getElementsByClassName("customScroll");
          for (let i = 0; i < dropdowns.length; i++) {
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
// burger
let burgerBtn = document.querySelector('.burger')
let menu = document.querySelector('.menu__list')
let enter = document.querySelector('.header__enter')
if(burgerBtn){
    burgerBtn.addEventListener('click', function() {
        document.body.classList.toggle('_lock')
        burgerBtn.classList.toggle('_active')
        menu.classList.toggle('_active')
        enter.classList.toggle('_active')
    })
}
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

      if(burgerBtn.classList.contains('_active')) {
        document.body.classList.remove('_lock')
        burgerBtn.classList.remove('_active')
        menu.classList.remove('_active')
        enter.classList.remove('_active')
      }

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
$( "#accordion" ).accordion({
  heightStyle: "content",
});
});

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

