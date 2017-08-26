'use strict';

const img = document.getElementById('slider');

let arr = [
        'i/airmax-jump.png',
        'i/airmax-on-foot.png',
        'i/airmax-playground.png',
        'i/airmax-top-view.png',
        'i/airmax.png'
    ],

    i = 0;

img.src = arr[i];

setInterval(() => {
    i++;
    i = i < arr.length ? i : 0;
    img.src = arr[i];
}, 5000);