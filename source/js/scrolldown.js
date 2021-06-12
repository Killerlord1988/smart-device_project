'use strict';
var promoScroll = document.querySelector('.promo__scroll p');

function scroll(posX, posY) {
  window.scrollTo(posX, posY);
}

promoScroll.addEventListener('click', function () {
  scroll(0, 1000);
});

promoScroll.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    scroll(0, 1000);
  }
});
