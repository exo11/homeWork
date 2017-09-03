'use strict';

let nav = document.getElementsByTagName('nav')[0],
    secret = document.getElementsByClassName('secret')[0],
    code = '';

document.addEventListener('keydown', event => {

    if (event.ctrlKey && event.altKey && event.code === 'KeyT') {
        nav.classList.toggle('visible');
    }

    code += event.code.charAt(3)

    if (/YTNJKJUBZ/.test(code)) {
        secret.classList.add('visible')
    }

});