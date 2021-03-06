'use strict';

var modalOpen = document.querySelector('.modal-overlay--open');
var modalClose = document.querySelector('.modal__close');
var modal = document.querySelector('.modal');
var modalOverlayWrapper = document.querySelector('.modal-overlay__wrapper');
var body = document.querySelector('body');

var callName = document.querySelector('[name=call-name]');
var phone = document.querySelector('[name=call-phone]');
var comment = document.querySelector('[name=call-comment]');
var form = document.querySelector('.form--modal');

var isStorage = true;
var nameStorage = '';
var phoneStorage = '';
var commentStorage = '';

try {
  nameStorage = localStorage.getItem('nameStorage');
  phoneStorage = localStorage.getItem('phoneStorage');
  commentStorage = localStorage.getItem('commentStorage');
} catch (err) {
  isStorage = false;
}

var setVisible = function (visible) {
  if (visible) {
    body.classList.add('modal-overlay__wrapper--open');
    document.addEventListener('keydown', escapeClickHandler);
  } else {
    body.classList.remove('modal-overlay__wrapper--open');
    modal.classList.remove('modal-overlay__wrapper--show');
    document.removeEventListener('keydown', escapeClickHandler);
  }
};

var escapeClickHandler = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    setVisible(false);
  }
};

if (modalOverlayWrapper) {
  modalOverlayWrapper.addEventListener('click', function (evt) {
    if (evt.target === modalOverlayWrapper && evt.target !== form) {
      setVisible(false);
    }
  });
}

if (modalOpen) {
  modalOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (modal) {
      modal.classList.add('modal-overlay__wrapper--show');
      setVisible(true);
      callName.focus();
    }

    if (nameStorage && phoneStorage) {
      callName.value = nameStorage;
      phone.value = phoneStorage;
      comment.value = commentStorage;
    }
  });
}

if (modalClose) {
  modalClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.remove('modal-overlay__wrapper--show');
    setVisible(false);
  });
}

if (form) {
  form.addEventListener('submit', function (evt) {
    if (!callName.value || !phone.value) {
      evt.preventDefault();
    } else {
      if (isStorage) {
        localStorage.setItem('nameStorage', callName.value);
        localStorage.setItem('phoneStorage', phone.value);
        localStorage.setItem('commentStorage', comment.value);
      }
    }
  });
}
