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

  //cards masters
  class MastersCard {
    constructor(src, alt, name, info, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.nameMaster = name;
      this.info = info;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
    }

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

  new MastersCard(
    'img/masters-one.png',
    'master-one',
    'Анжела',
    '20 лет, 165 см',
    '.masters .container .masters__list',
    'masters__item',
  ).render();

  new MastersCard(
    'img/masters-two.png',
    'master-two',
    'Анжела',
    '20 лет, 165 см',
    '.masters .container .masters__list',
    'masters__item',
  ).render();

  new MastersCard(
    'img/masters-three.png',
    'master-three',
    'Анжела',
    '20 лет, 165 см',
    '.masters .container .masters__list',
    'masters__item',
  ).render();

  new MastersCard(
    'img/masters-one.png',
    'master-one',
    'Анжела',
    '20 лет, 165 см',
    '.masters .container .masters__list',
    'masters__item',
  ).render();

  new MastersCard(
    'img/masters-two.png',
    'master-two',
    'Анжела',
    '20 лет, 165 см',
    '.masters .container .masters__list',
    'masters__item',
  ).render();

  new MastersCard(
    'img/masters-three.png',
    'master-three',
    'Анжела',
    '20 лет, 165 см',
    '.masters .container .masters__list',
    'masters__item',
  ).render();

  //cards programs

  class ProgramsCard {
    constructor(src, alt, title, descr, watch, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.watch = watch;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
    }

    render() {
      const element = document.createElement('li');
      if (this.classes.length === 0) {
        this.element = 'programs__list-item';
        element.classList.add(this.element);
      } else {
        this.classes.forEach(className => {
          element.classList.add(className);
        });
      }

      element.innerHTML = `
      <div class="programs__card card">
          <div class="card__bg">
            <img src=${this.src} alt=${this.alt}>
          </div>
          <div class="card__content">
            <h4 class="card__title">${this.title}</h4>
            <p class="card__descr">${this.descr}
            </p>
            <div class="card__price price">
              <div class="price__section">
                <img src="img/watch.svg" alt="watch">
                <p class="price__watch"><span class="price__watch--fs28">${this.watch}</span> минут</p>
              </div>
              <div class="price__section">
                <img src="img/coin.svg" alt="coin">
                <p class="price__coin"><span class="price__watch--fs28">${this.price}</span> рублей</p>
              </div>
            </div>
            <a class="card__more" href="#">
              <p>Подробнее</p>
              <img src="img/programs-card-arr.svg" alt="arr">
            </a>
          </div>
        </div>
        `;
      this.parent.append(element);
    };
  }

  new ProgramsCard(
    'img/programs-card-one.png',
    'massage',
    'Лечебный массаж',
    'Программа Лечебный массаж идеально подходит для тех, кто спешит получить удовольствие.',
    '30',
    '3000',
    '.programs .container .programs__list',
    'programs__list-item',
  ).render();

  new ProgramsCard(
    'img/programs-card-two.png',
    'massage',
    'Оздоровительный массаж',
    'Программа Лечебный массаж идеально подходит для тех, кто спешит получить удовольствие.',
    '30',
    '3000',
    '.programs .container .programs__list',
    'programs__list-item',
  ).render();

  new ProgramsCard(
    'img/programs-card-three.png',
    'massage',
    'Массаж стоп',
    'Программа Лечебный массаж идеально подходит для тех, кто спешит получить удовольствие.',
    '30',
    '3000',
    '.programs .container .programs__list',
    'programs__list-item',
  ).render();

  new ProgramsCard(
    'img/programs-card-one.png',
    'massage',
    'Массаж ШВЗ',
    'Программа Лечебный массаж идеально подходит для тех, кто спешит получить удовольствие.',
    '30',
    '3000',
    '.programs .container .programs__list',
    'programs__list-item',
  ).render();

  new ProgramsCard(
    'img/programs-card-two.png',
    'massage',
    'Массаж рук',
    'Программа Лечебный массаж идеально подходит для тех, кто спешит получить удовольствие.',
    '30',
    '3000',
    '.programs .container .programs__list',
    'programs__list-item',
  ).render();

  new ProgramsCard(
    'img/programs-card-three.png',
    'massage',
    'Какой-то еще массаж',
    'Программа Лечебный массаж идеально подходит для тех, кто спешит получить удовольствие.',
    '30',
    '3000',
    '.programs .container .programs__list',
    'programs__list-item',
  ).render();

});
