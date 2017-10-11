'use strict';

const arrL = document.getElementsByClassName('long-pooling')[0].querySelectorAll('div'),
url = 'https://neto-api.herokuapp.com/comet/long-pooling';

longPooling(url);

function longPooling(url) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("error", () => console.log('сработало событие error')); 
  xhr.addEventListener('load', () =>  {
    if (xhr.status > 300 || xhr.status < 200) {
    console.log(`Ответ ${xhr.status}: ${xhr.statusText}`);  
    } else {
    let data = xhr.responseText.replace(/\D+/ig,'');
      changeClass(data, arrL); 	
    }
    longPooling(url);
  });
  xhr.open("GET", url, true);
  xhr.send();
}

