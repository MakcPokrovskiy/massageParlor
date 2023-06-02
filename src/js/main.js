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

});
