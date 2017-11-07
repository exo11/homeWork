'use strict';

function AuthForm({onAuth}) {
 let form;
  
  function formHandler(event) {
    event.preventDefault();
    const nameField = form.querySelector('input[type="text"]'),
      emailField = form.querySelector('input[type="email"]'),
      passwordField = form.querySelector('input[type="password"]'),
      user = {name: nameField.value, email: emailField.value, password: passwordField.value};
    typeof onAuth === 'function' && onAuth(user);
  }

  return (
    <form className="ModalForm" action="/404/auth/" method="POST"  onSubmit={formHandler} ref={el => form = el}>
      <div className="Input">
        <input required type="text" placeholder="Имя"/>
        <label></label>
  	  </div>
      <div className="Input">
        <input type="email" placeholder="Электронная почта" onChange={event => {event.currentTarget.value = event.currentTarget.value.replace(/[^'A-z','0-9','@','.','_','-']/, '')}} />
        <label></label>
      </div>
      <div className="Input">
        <input required type="password" placeholder="Пароль" onChange={event => {event.currentTarget.value = event.currentTarget.value.replace(/[^'A-z','0-9','_']/, '')}} />
        <label></label>
      </div>
      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"></i>
      </button>
    </form>
  )
}