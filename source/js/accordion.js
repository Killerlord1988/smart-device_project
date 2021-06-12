'use strict';

var acc = document.getElementsByClassName('accordion');
var panels = document.getElementsByClassName('footer__accordion-panel');

document.querySelectorAll('.footer__content .footer__accordion-panel--no-js').forEach(function (n) {
  n.classList.remove('footer__accordion-panel--no-js');
});

function removeActiveClass(arr, cls) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].classList.contains(cls)) {
      arr[i].classList.remove(cls);
    }
  }
}

function closeAllAccordion() {
  removeActiveClass(acc, 'accordion--active');
  removeActiveClass(panels, 'footer__accordion-panel--active');
}

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function (evt) {
    closeAllAccordion();

    evt.target.classList.toggle('accordion--active');

    var panel = evt.target.nextElementSibling;
    if (panel.classList.contains('footer__accordion-panel--active')) {
      panel.classList.remove('footer__accordion-panel--active');
    } else {
      panel.classList.add('footer__accordion-panel--active');
    }
  });
}
