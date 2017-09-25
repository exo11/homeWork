'use strict';

const colorSwatch = document.getElementById('colorSwatch'),
  sizeSwatch = document.getElementById('sizeSwatch'),
  cart = document.getElementById('quick-cart'),
  form = document.getElementById('AddToCartForm'),
  addBtn = document.getElementById('AddToCart');
  
httpRequest('GET', 'https://neto-api.herokuapp.com/cart/colors')
  .addEventListener('load', event => {
    addElements(colorSwatch, event, addColorHTML, '<div class="header">Цвет</div>');
    saveBtnState(colorSwatch);
  });

httpRequest('GET', 'https://neto-api.herokuapp.com/cart/sizes')
  .addEventListener('load', event => {
    addElements(sizeSwatch, event, addSizeHtml, '<div class="header">Размер</div>');
    saveBtnState(sizeSwatch);
  });

addBtn.addEventListener('click', addCartItem);
cart.addEventListener('click', remCartItem);


function addCartItem(event) {
  event.preventDefault();
  const formData = new FormData(form);
  formData.append('productId', form.dataset.productId);
  httpRequest('POST', 'https://neto-api.herokuapp.com/cart', formData)
    .addEventListener('load', event =>
      addElements(cart, event, addCartHtml, ''));
}


function remCartItem(event) {
  if (event.target.classList.contains('remove')) {
    const formData = new FormData();
    formData.append('productId', event.target.dataset.id);
    httpRequest('POST', 'https://neto-api.herokuapp.com/cart/remove', formData)
      .addEventListener('load', event =>
        addElements(cart, event, addCartHtml, ''));
  }
}


function saveBtnState(node) {
  let items = node.getElementsByTagName('input');
  for (let item of items) {
    item.addEventListener('click', () => {
      Array.from(items).forEach(item => {
        if (item.checked) {
          localStorage.setItem(item.id, "true");
        } else {
          localStorage.setItem(item.id, "false");
        }
      });
    });
    if (localStorage.getItem(item.id) === "true") {
      item.setAttribute('checked', 'checked');
    }
  }
}


function httpRequest(method, url, body = undefined) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.send(body);
  return xhr;
}


function addElements(node, event, func, header) {
  let items = JSON.parse(event.target.response);
  node.innerHTML = items.reduce((sum, item) => {
    return sum + func(item)
  }, header);
}


function addColorHTML(color) {
  return color.isAvailable ?
    `<div data-value=${color.type} class="swatch-element color ${color.type} available">
  <div class="tooltip">${color.title}</div>
  <input quickbeam="color" id="swatch-1-${color.type}" type="radio" name="color" value=${color.type} checked>
  <label for="swatch-1-${color.type}" style="border-color: red;">
    <span style="background-color: ${color.code};"></span>
    <img class="crossed-out"
      src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
  </label>
</div>` :
    `<div data-value=${color.type} class="swatch-element color ${color.type} soldout">
  <div class="tooltip">${color.title}</div>
  <input quickbeam="color" id="swatch-1-${color.type}" type="radio" name="color" value=${color.type} disabled>
  <label for="swatch-1-${color.type}" style="border-color: red;">
    <span style="background-color: ${color.code};"></span>
    <img class="crossed-out"
      src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
  </label>
</div>`
}


function addSizeHtml(size) {
  return size.isAvailable ?
    `<div data-value=${size.type} class="swatch-element plain ${size.type} available">
  <input id="swatch-0-${size.type}" type="radio" name="size" value=${size.type} checked>
  <label for="swatch-0-${size.type}">
    ${size.title}
    <img class="crossed-out"
      src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
  </label>
</div>` :
    `<div data-value=${size.type} class="swatch-element plain ${size.type} soldout">
  <input id="swatch-0-${size.type}" type="radio" name="size" value=${size.type} disabled>
  <label for="swatch-0-${size.type}">
    ${size.title}
    <img class="crossed-out"
      src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
  </label>
</div>`
}


function addCartHtml(item) {
  if (item) {
    if (item.quantity > 0) {
      return `<div class="quick-cart-product quick-cart-product-static"
  id="quick-cart-product-${item.id}" style="opacity: 1;">
  <div class="quick-cart-product-wrap">
    <img src=${item.pic}
      title=${item.title}>
    <span class="s1" style="background-color: #000; opacity: .5">$800.00</span>
    <span class="s2"></span>
  </div>
  <span class="count hide fadeUp" id="quick-cart-product-count-${item.id}">${item.quantity}</span>
  <span class="quick-cart-product-remove remove" data-id=${item.id}></span>
   </div>
      <a id="quick-cart-pay" quickbeam="cart-pay" class="cart-ico open">
  <span>
    <strong class="quick-cart-text">Оформить заказ<br></strong>
    <span id="quick-cart-price">$${item.price * item.quantity}.00</span>
  </span>
</a>`
    } else {
      return `<div class="quick-cart-product quick-cart-product-static"
  id="quick-cart-product-${item.id}" style="opacity: 1;">
  <div class="quick-cart-product-wrap">
    <img src=${item.pic}
      title=${item.title}>
    <span class="s1" style="background-color: #000; opacity: .5">$800.00</span>
    <span class="s2"></span>
  </div>
  <span class="count hide fadeUp" id="quick-cart-product-count-${item.id}">${item.quantity}</span>
  <span class="quick-cart-product-remove remove" data-id=${item.id}></span>
   </div>
      <a id="quick-cart-pay" quickbeam="cart-pay" class="cart-ico ">
  <span>
    <strong class="quick-cart-text">Оформить заказ<br></strong>
    <span id="quick-cart-price">$${item.price * item.quantity}.00</span>
  </span>
</a>`
    }
  }
}