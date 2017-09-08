'use strict';

const xhr = new XMLHttpRequest(),
    content = document.getElementById('content');

xhr.open("GET", "https://netology-fbb-store-api.herokuapp.com/book/");
xhr.send();

xhr.addEventListener('load', addBooks);

function addBooks() {
    const books = JSON.parse(xhr.responseText);
    let str = '';
    for (let book of books) {
        str +=
        `<li
  			    data-title="${book.title}"
  				  data-author="${book.author.name}"
  				  data-info="${book.info}"
  				  data-price="${book.price}">
  				  <img src="${book.cover.small}">
		    </li>`
    }
    content.innerHTML = str;
}