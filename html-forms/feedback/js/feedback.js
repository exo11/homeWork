'use strict';

const form = document.getElementsByClassName('contentform')[0],
  inputs = form.querySelectorAll('input,textarea'),
  button = document.getElementsByClassName('button-contact'),
  output = document.getElementById('output'),
  outputs = output.getElementsByTagName('output'),
  zipInput = form.querySelector('input[name="zip"]');

zipInput.addEventListener('input', () => {
  zipInput.value = (/[^0-9]/g).test(zipInput.value) ?
    null : zipInput.value;
});

for (let input of inputs) {
  input.addEventListener('input', () => {
    button[0].disabled = checkInputs() ? null : 'disabled';
  });
}

button[0].addEventListener('click', event => {
  event.preventDefault();
  form.classList.add('hidden');
  output.classList.remove('hidden');
  subValues();
});

button[1].addEventListener('click', () => {
  form.classList.remove('hidden');
  output.classList.add('hidden');
});

function subValues() {
  for (let input of inputs) {

    for (let output of outputs) {
      if (input.name === output.id) {
        output.value = input.value;
      }
    }

  }
}

function checkInputs() {
  for (let input of inputs) {
    if (!(input.value)) {
      return;
    }
  }
  return true;
}