window.addEventListener('DOMContentLoaded', () => {
  // open/close modal window
  const modalWindow = document.querySelector('.modal');
  const modalClose = document.querySelector('.modal__close');
  const modalOpenBtn = document.querySelector('.home__btn');
  const overlayModalWindow = document.querySelector('.home__overlay');

  function openModalWindow() {
    modalWindow.style.display = 'block';
    overlayModalWindow.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function closeModalWindow() {
    modalWindow.style.display = 'none';
    overlayModalWindow.style.display = 'none';
    document.body.style.overflow = '';
  }

  modalOpenBtn.addEventListener('click', openModalWindow);
  modalClose.addEventListener('click', closeModalWindow);
  overlayModalWindow.addEventListener('click', closeModalWindow);

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      closeModalWindow();
    }
  });
  //burger menu
  const burgerMenu = document.querySelector('.header__burger');
  const headerMenu = document.querySelector('.header__menu');
  const headerContact = document.querySelector('.header__contact');
  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    headerMenu.classList.toggle('active');
    headerContact.style.display = 'none';
    overlayModalWindow.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      burgerMenu.classList.remove('active');
      headerMenu.classList.remove('active');
      overlayModalWindow.style.display = 'none';
      document.body.style.overflow = '';
    }
  });

  overlayModalWindow.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    headerMenu.classList.remove('active');
    overlayModalWindow.style.display = 'none';
    document.body.style.overflow = '';
  });

  //slider
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 5,
    mousewheel: true,
    keyboard: true,
  });

  //card
  class MenuCard {
    constructor(src, alt, name, info, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.nameMaster = name;
      this.info = info;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      // this.transfer = 80;
      // this.changeToUAH();
    }

    // changeToUAH() {
    //   this.price = this.price * this.transfer;
    // }

    render() {
      const element = document.createElement('li');
      if (this.classes.length === 0) {
        this.element = 'masters__item';
        element.classList.add(this.element);
      } else {
        this.classes.forEach(className => {
          element.classList.add(className);
        });
      }

      element.innerHTML = `
      <a class="masters__card masters-card" href="#">
          <div class="masters-card__bg">
            <img src=${this.src} alt=${this.alt}>
          </div>
          <div class="masters-card__content">
            <p class="masters-card__name">${this.nameMaster}</p>
            <p class="masters-card__info">${this.info}</p>
          </div>
        </a>
        `;
      this.parent.append(element);
    };
  }

  new MenuCard(
    'img/masters-one.png',
    'master-one',
    'Анжела',
    '20 лет, 165 см',
    '.masters .container .masters__list',
    'masters__item',
  ).render();

  new MenuCard(
    'img/masters-two.png',
    'master-two',
    'Анжела',
    '20 лет, 165 см',
    '.masters .container .masters__list',
    'masters__item',
  ).render();

  new MenuCard(
    'img/masters-three.png',
    'master-three',
    'Анжела',
    '20 лет, 165 см',
    '.masters .container .masters__list',
    'masters__item',
  ).render();
  new MenuCard(
    'img/masters-one.png',
    'master-one',
    'Анжела',
    '20 лет, 165 см',
    '.masters .container .masters__list',
    'masters__item',
  ).render();

  new MenuCard(
    'img/masters-two.png',
    'master-two',
    'Анжела',
    '20 лет, 165 см',
    '.masters .container .masters__list',
    'masters__item',
  ).render();

  new MenuCard(
    'img/masters-three.png',
    'master-three',
    'Анжела',
    '20 лет, 165 см',
    '.masters .container .masters__list',
    'masters__item',
  ).render();
});
