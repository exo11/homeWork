'use strict';

const links = document.querySelectorAll('nav > a'),
    content = document.getElementById('content'),
    preloader = document.getElementById('preloader'),
    xhr = new XMLHttpRequest();

loadText(links[0]);

for (let link of links) {

    link.addEventListener('click', event => {
        event.preventDefault();
        preloader.classList.remove('hidden');
        links.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
        loadText(link);
    });

}

function loadText(link) {
    xhr.open("GET", link.getAttribute('href'));
    xhr.send();
    xhr.addEventListener('load', () => {
        content.innerHTML = xhr.responseText;
        preloader.classList.add('hidden');
    });
}