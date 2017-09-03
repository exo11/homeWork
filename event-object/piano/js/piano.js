'use strict';

let arr = [
        'sounds/middle/first.mp3',
        'sounds/middle/second.mp3',
        'sounds/middle/third.mp3',
        'sounds/middle/fourth.mp3',
        'sounds/middle/fifth.mp3'
    ],
    set = document.getElementsByClassName('set')[0],
    buttons = set.getElementsByTagName('li'),
    audio = set.getElementsByTagName('audio');

function changeFolder(folder) {
    let result = [];
    for (let src of arr) {
        result.push(src.replace(/\/\w+\//, `/${folder}/`));
    }
    return result;
}


for (let i = 0; i < buttons.length; i++) {

    document.addEventListener('keydown', event => {

        if (event.repeat) {

            if (event.shiftKey) {
                set.classList.remove('middle', 'higher');
                set.classList.add('lower');
                arr = changeFolder('lower');
            }

            if (event.altKey) {
                set.classList.remove('middle', 'lower');
                set.classList.add('higher');
                arr = changeFolder('higher');
            }

        }

    })

    document.addEventListener('keyup', () => {
        set.classList.remove('higher', 'lower');
        set.classList.add('middle');
        arr = changeFolder('middle');
    })

    buttons[i].addEventListener('click', () => {
        audio[i].src = arr[i];
        audio[i].play();
    })

}