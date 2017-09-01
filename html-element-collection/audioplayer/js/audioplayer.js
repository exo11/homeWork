'use strict';

let buttons = document.getElementsByTagName('button'),
    audio = document.getElementsByTagName('audio')[0],
    player = document.getElementsByClassName('mediaplayer')[0],
    title = document.getElementsByClassName('title')[0],
    arr = [
        { src: 'mp3/LA%20Chill%20Tour.mp3', title: 'LA Chill Tour' },
        { src: 'mp3/LA%20Fusion%20Jam.mp3', title: 'LA Fusion Jam' },
        { src: 'mp3/This%20is%20it%20band.mp3', title: 'This is it band' }
    ],
    i = 0;



for (let key of buttons) {

    key.onclick = () => {

        if (key.className === 'playstate') {
            player.classList.contains('play') ? audio.pause() : audio.play();
            player.classList.toggle('play');
        }

        if (key.className === 'stop') {
            audio.pause();
            audio.currentTime = 0;
            player.classList.remove('play');
        }

        if (key.className === 'next') {
            i++;
            i = i < arr.length ? i : 0;
            audio.src = arr[i].src;
            title.title = arr[i].title;
            if (player.classList.contains('play')) {
                audio.play()
            }
        }

        if (key.className === 'back') {
            i--;
            i = i < 0 ? arr.length - 1 : i;
            audio.src = arr[i].src;
            title.title = arr[i].title;
            if (player.classList.contains('play')) {
                audio.play()
            }
        }

        audio.onended = () => {
            player.classList.remove('play')
        }

    }

}