'use strict';
/* eslint-disable */
$('#phone').mask('+7 (999) 999-99-99');
$('#call-phone').mask('+7 (999) 999-99-99');
/* eslint-enable */

var noJs = document.querySelectorAll('.no-js');
noJs.forEach(function (n) {
  n.classList.remove('no-js');
});
