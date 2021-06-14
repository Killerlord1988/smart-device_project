'use strict';
/* eslint-disable */
$('#phone').mask('+7 (999) 999-99-99');
$('#call-phone').mask('+7 (999) 999-99-99');
/* eslint-enable */

var noJs = document.querySelectorAll('.no-js');
var noJsAfter = document.querySelectorAll('.no-js-after');

function removeNoJs(arr, cls) {
  arr.forEach(function (n) {
    n.classList.remove(cls);
  });
}

removeNoJs(noJs, 'no-js');
removeNoJs(noJsAfter, 'no-js-after');
