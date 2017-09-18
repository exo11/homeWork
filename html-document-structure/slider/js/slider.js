'use strict';

const sliders = document.getElementsByClassName('slider');

Array.from(sliders).forEach(item => slider(item));

function slider(container) {

  const slides = container.getElementsByClassName('slides')[0],
    buttons = container.querySelectorAll('.slider-nav > a');

  let currentSlide = container.querySelector('ul > li');

  currentSlide.classList.add('slide-current');
  updateUi();

  Array.from(buttons).forEach(btn => handlerBtn(btn, btn.dataset.action));

  function handlerBtn(btn, isForward) {
    btn.addEventListener('click', () => {
      if (!(btn.classList.contains('disabled'))) { moveNext(isForward) };
    });
  }

  function moveNext(isForward) {
    let nextSlide =
      isForward === 'first' ? slides.firstElementChild :
      isForward === 'last' ? slides.lastElementChild :
      isForward === 'next' ? currentSlide.nextElementSibling :
      isForward === 'prev' ? currentSlide.previousElementSibling : nextSlide;

    currentSlide.classList.remove('slide-current');
    nextSlide.classList.add('slide-current');
    currentSlide = nextSlide;
    
    updateUi();
  }

  function updateUi() {
    Array.from(buttons).forEach(btn => {
      (btn.dataset.action === 'next' || btn.dataset.action == 'last') ?
      btn.classList.toggle('disabled', currentSlide.nextElementSibling === null):
        btn.classList.toggle('disabled', currentSlide.previousElementSibling === null);
    });
  }

}