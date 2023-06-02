(()=>{var __webpack_modules__={"./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/()=>{eval("window.addEventListener('DOMContentLoaded', function () {\n  // open/close modal window\n  var modalWindow = document.querySelector('.modal');\n  var modalClose = document.querySelector('.modal__close');\n  var modalOpenBtn = document.querySelector('.home__btn');\n  var overlayModalWindow = document.querySelector('.home__overlay');\n  function openModalWindow() {\n    modalWindow.style.display = 'block';\n    overlayModalWindow.style.display = 'block';\n    document.body.style.overflow = 'hidden';\n  }\n  function closeModalWindow() {\n    modalWindow.style.display = 'none';\n    overlayModalWindow.style.display = 'none';\n    document.body.style.overflow = '';\n  }\n  modalOpenBtn.addEventListener('click', openModalWindow);\n  modalClose.addEventListener('click', closeModalWindow);\n  overlayModalWindow.addEventListener('click', closeModalWindow);\n  document.addEventListener('keydown', function (e) {\n    if (e.code === 'Escape') {\n      closeModalWindow();\n    }\n  });\n  //burger menu\n  var burgerMenu = document.querySelector('.header__burger');\n  var headerMenu = document.querySelector('.header__menu');\n  var headerContact = document.querySelector('.header__contact');\n  burgerMenu.addEventListener('click', function () {\n    burgerMenu.classList.toggle('active');\n    headerMenu.classList.toggle('active');\n    headerContact.style.display = 'none';\n    overlayModalWindow.style.display = 'block';\n    document.body.style.overflow = 'hidden';\n  });\n  document.addEventListener('keydown', function (e) {\n    if (e.code === 'Escape') {\n      burgerMenu.classList.remove('active');\n      headerMenu.classList.remove('active');\n      overlayModalWindow.style.display = 'none';\n      document.body.style.overflow = '';\n    }\n  });\n  overlayModalWindow.addEventListener('click', function () {\n    burgerMenu.classList.remove('active');\n    headerMenu.classList.remove('active');\n    overlayModalWindow.style.display = 'none';\n    document.body.style.overflow = '';\n  });\n\n  //slider\n  var swiper = new Swiper('.swiper', {\n    loop: true,\n    slidesPerView: 'auto',\n    spaceBetween: 5,\n    mousewheel: true,\n    keyboard: true\n  });\n});\n\n//# sourceURL=webpack://start/./src/js/main.js?")}},__webpack_exports__={};__webpack_modules__["./src/js/main.js"]()})();
//# sourceMappingURL=main.js.map