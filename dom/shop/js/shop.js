'use strict';

function countTotalPrice() {

    let buttonAdd = document.querySelectorAll('.add'),
        cartCount = document.getElementById('cart-count'),
        cartTotal = document.getElementById('cart-total-price'),
        totalPrice = 0,
        counter = 0;

    for (let button of buttonAdd) {

        button.addEventListener('click', event => {
            counter++;
            totalPrice += +button.getAttribute('data-price');
            cartCount.innerHTML = counter;
            cartTotal.innerHTML = getPriceFormatted(totalPrice);
        })

    }

}

document.addEventListener('DOMContentLoaded', countTotalPrice);