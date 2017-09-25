'use strict';
const login = document.getElementsByClassName('login-wrap')[0];
loginForm(login);


function loginForm(container) {
  const formUp = container.querySelector('.sign-up-htm'),
    formIn = container.querySelector('.sign-in-htm'),
    upBtn = formUp.querySelector('.button'),
    inBtn = formIn.querySelector('.button');

  upBtn.addEventListener('click', event => {
    handlerFormBtn(event, formUp, 'https://neto-api.herokuapp.com/signup');
  });

  inBtn.addEventListener('click', event => {
    handlerFormBtn(event, formIn, 'https://neto-api.herokuapp.com/signin');
  });


  function handlerFormBtn(event, form, url) {
    event.preventDefault();
    const formData = new FormData(form),
      output = form.querySelector('.error-message');
    let obj = {};
    for (let [key, value] of formData) {
      obj[key] = value;
    }
    obj = JSON.stringify(obj);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(obj);

    xhr.addEventListener('load', () => {
      obj = JSON.parse(xhr.response);
      if (obj.error) {
        output.textContent = obj.message;
      } else if (event.target === upBtn) {
        output.textContent = `Пользователь ${obj.name} успешно зарегистрирован`;
      } else if (event.target === inBtn) {
        output.textContent = `Пользователь ${obj.name} успешно авторизован`;
      }
    });
  }
}