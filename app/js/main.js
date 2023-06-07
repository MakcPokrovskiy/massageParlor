(()=>{var __webpack_modules__={"./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/()=>{eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nwindow.addEventListener('DOMContentLoaded', function () {\n  // open/close modal window\n  var modalWindow = document.querySelector('.modal');\n  var modalClose = document.querySelector('.modal__close');\n  var modalOpenBtn = document.querySelector('.home__btn');\n  var overlayModalWindow = document.querySelector('.home__overlay');\n  function openModalWindow() {\n    modalWindow.style.display = 'block';\n    overlayModalWindow.style.display = 'block';\n    document.body.style.overflow = 'hidden';\n  }\n  function closeModalWindow() {\n    modalWindow.style.display = 'none';\n    overlayModalWindow.style.display = 'none';\n    document.body.style.overflow = '';\n  }\n  modalOpenBtn.addEventListener('click', openModalWindow);\n  modalClose.addEventListener('click', closeModalWindow);\n  overlayModalWindow.addEventListener('click', closeModalWindow);\n  document.addEventListener('keydown', function (e) {\n    if (e.code === 'Escape') {\n      closeModalWindow();\n    }\n  });\n  //burger menu\n  var burgerMenu = document.querySelector('.header__burger');\n  var headerMenu = document.querySelector('.header__menu');\n  var headerContact = document.querySelector('.header__contact');\n  burgerMenu.addEventListener('click', function () {\n    burgerMenu.classList.toggle('active');\n    headerMenu.classList.toggle('active');\n    headerContact.style.display = 'none';\n    overlayModalWindow.style.display = 'block';\n    document.body.style.overflow = 'hidden';\n  });\n  document.addEventListener('keydown', function (e) {\n    if (e.code === 'Escape') {\n      burgerMenu.classList.remove('active');\n      headerMenu.classList.remove('active');\n      overlayModalWindow.style.display = 'none';\n      document.body.style.overflow = '';\n    }\n  });\n  overlayModalWindow.addEventListener('click', function () {\n    burgerMenu.classList.remove('active');\n    headerMenu.classList.remove('active');\n    overlayModalWindow.style.display = 'none';\n    document.body.style.overflow = '';\n  });\n\n  //slider\n  var swiper = new Swiper('.swiper', {\n    loop: true,\n    slidesPerView: 'auto',\n    spaceBetween: 5,\n    mousewheel: true,\n    keyboard: true\n  });\n\n  //card\n  var MenuCard = /*#__PURE__*/function () {\n    function MenuCard(src, alt, name, info, parentSelector) {\n      _classCallCheck(this, MenuCard);\n      this.src = src;\n      this.alt = alt;\n      this.nameMaster = name;\n      this.info = info;\n      for (var _len = arguments.length, classes = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {\n        classes[_key - 5] = arguments[_key];\n      }\n      this.classes = classes;\n      this.parent = document.querySelector(parentSelector);\n      // this.transfer = 80;\n      // this.changeToUAH();\n    }\n\n    // changeToUAH() {\n    //   this.price = this.price * this.transfer;\n    // }\n    _createClass(MenuCard, [{\n      key: \"render\",\n      value: function render() {\n        var element = document.createElement('li');\n        if (this.classes.length === 0) {\n          this.element = 'masters__item';\n          element.classList.add(this.element);\n        } else {\n          this.classes.forEach(function (className) {\n            element.classList.add(className);\n          });\n        }\n        element.innerHTML = \"\\n      <a class=\\\"masters__card masters-card\\\" href=\\\"#\\\">\\n          <div class=\\\"masters-card__bg\\\">\\n            <img src=\".concat(this.src, \" alt=\").concat(this.alt, \">\\n          </div>\\n          <div class=\\\"masters-card__content\\\">\\n            <p class=\\\"masters-card__name\\\">\").concat(this.nameMaster, \"</p>\\n            <p class=\\\"masters-card__info\\\">\").concat(this.info, \"</p>\\n          </div>\\n        </a>\\n        \");\n        this.parent.append(element);\n      }\n    }]);\n    return MenuCard;\n  }();\n  new MenuCard('img/masters-one.png', 'master-one', 'Анжела', '20 лет, 165 см', '.masters .container .masters__list', 'masters__item').render();\n  new MenuCard('img/masters-two.png', 'master-two', 'Анжела', '20 лет, 165 см', '.masters .container .masters__list', 'masters__item').render();\n  new MenuCard('img/masters-three.png', 'master-three', 'Анжела', '20 лет, 165 см', '.masters .container .masters__list', 'masters__item').render();\n  new MenuCard('img/masters-one.png', 'master-one', 'Анжела', '20 лет, 165 см', '.masters .container .masters__list', 'masters__item').render();\n  new MenuCard('img/masters-two.png', 'master-two', 'Анжела', '20 лет, 165 см', '.masters .container .masters__list', 'masters__item').render();\n  new MenuCard('img/masters-three.png', 'master-three', 'Анжела', '20 лет, 165 см', '.masters .container .masters__list', 'masters__item').render();\n});\n\n//# sourceURL=webpack://start/./src/js/main.js?")}},__webpack_exports__={};__webpack_modules__["./src/js/main.js"]()})();
//# sourceMappingURL=main.js.map
