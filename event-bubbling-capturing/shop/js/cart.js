'use strict';

const listItem = document.querySelector('.items-list');

listItem.addEventListener('click', handlerAddToCart);


function handlerAddToCart(event) {
  event.preventDefault();
  if (event.target.classList.contains('add-to-cart')) {
    let item = {
      title: event.target.dataset.title,
      price: event.target.dataset.price
    };
    addToCart(item);
  }
}