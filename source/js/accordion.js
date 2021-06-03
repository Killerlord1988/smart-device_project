'use strict';

var acc = document.getElementsByClassName('accordion');

document.querySelectorAll('.footer__content .footer__accordion-panel--no-js').forEach(function (n) {
  n.classList.remove('footer__accordion-panel--no-js');
});

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function (evt) {
    evt.target.classList.toggle('accordion--active');

    var panel = evt.target.nextElementSibling;
    if (panel.classList.contains('footer__accordion-panel--active')) {
      panel.classList.remove('footer__accordion-panel--active');
      panel.classList.add('footer__accordion-panel');

    } else {
      panel.classList.add('footer__accordion-panel--active');
      panel.classList.remove('footer__accordion-panel');
    }
  });
}
