'use strict';

for (let key of document.getElementsByTagName('li')) {
    key.onclick = () => {
        key.getElementsByTagName('audio')[0].play();
    }
}