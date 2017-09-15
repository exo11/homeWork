'use strict';

const xhr = new XMLHttpRequest(),
  loader = document.getElementById('loader'),
  content = document.getElementById('content'),
  selects = content.querySelectorAll('select'),
  result = document.getElementById('result'),
  source = document.getElementById('source');

loader.classList.remove('hidden');

xhr.open('GET', 'https://neto-api.herokuapp.com/currency');
xhr.send();

xhr.addEventListener('load', () => {
  let arrCurrency = JSON.parse(xhr.responseText);

  loader.classList.add('hidden');
  content.classList.remove('hidden');

  for (let select of selects) {

    select.innerHTML = arrCurrency.reduce((sum, currency) => {
      return sum + `<option label='${currency.code}' 
      value='${currency.value}' title='${currency.title}'>
      ${currency.code}</option>`
    }, '');

  }

  convertCurrency();
  source.addEventListener('input', convertCurrency);
  selects.forEach(select => {
    select.addEventListener('change', convertCurrency);
  });

});

function convertCurrency() {
  result.value = (source.value * selects[0].value / selects[1].value).toFixed(2);

}