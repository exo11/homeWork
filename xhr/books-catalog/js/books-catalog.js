'use strict';

const xhr = new XMLHttpRequest(),
  content = document.getElementById('content');

xhr.open("GET", "https://netology-fbb-store-api.herokuapp.com/book/");
xhr.send();

xhr.addEventListener('load', addBooks);

function addBooks() {
  const books = JSON.parse(xhr.responseText);

  content.innerHTML = books.reduce((sum, book) => {
    return sum + 
      `<li
			  data-title="${book.title}"
				data-author="${book.author.name}"
				data-info="${book.info}"
				data-price="${book.price}">
				<img src="${book.cover.small}">
			</li>`
    }, '');

}
