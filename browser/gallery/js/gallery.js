'use srtict';

let arr = [
        'i/breuer-building.jpg',
        'i/guggenheim-museum.jpg',
        'i/headquarters.jpg',
        'i/IAC.jpg',
        'i/new-museum.jpg'
    ],

    currentPhoto = document.getElementById('currentPhoto'),

    buttonPrev = document.getElementById('prevPhoto'),

    buttonNext = document.getElementById('nextPhoto'),

    i = 0;

currentPhoto.src = arr[i];

function showPrew() {
    i--;
    i = i < 0 ? (arr.length - 1) : i;
    currentPhoto.src = arr[i];
};

function showNext() {
    i++;
    i = i === arr.length ? 0 : i;
    currentPhoto.src = arr[i];
};

buttonPrev.onclick = showPrew;

buttonNext.onclick = showNext;