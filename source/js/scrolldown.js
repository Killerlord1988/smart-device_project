'use strict';

var promoScroll = document.querySelector('.promo__scroll');

console.log(promoScroll);

promoScroll.addEventListener('click', function() {
  window.scrollTo(0, 1000);
});
