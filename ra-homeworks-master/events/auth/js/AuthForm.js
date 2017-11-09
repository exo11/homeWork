'use strict';

function AuthForm({onAuth}) {
 let form;
  
  
  function fieldValidation(event) {
    let reg = event.currentTarget.type === 'email' ? 
      /[^A-z 0-9 @ . _ -]/ :  /[^A-z 0-9 _]/;
    event.currentTarget.value = event.currentTarget.value.replace(reg, '')
  }

  
  function formHandler(event) {
    event.preventDefault();
    if (typeof onAuth !== 'function') {
      throw new Error('onAuth is not a function !');
      return;
    }
    const nameField = form['name'].value,
      emailField = form['email'].value,
      passwordField = form['password'].value,
      user = {
        name: nameField, 
        email: emailField, 
        password: passwordField
      };
    onAuth(user);
  }

  return (
    <form className="ModalForm" action="/404/auth/" method="POST"  onSubmit={formHandler} ref={el => form = el}>
      <div className="Input">
        <input required type="text" placeholder="Имя" name='name'/>
        <label></label>
  	  </div>
      <div className="Input">
        <input required type="email" placeholder="Электронная почта" name='email' onChange={fieldValidation}/>
        <label></label>
      </div>
      <div className="Input">
        <input required type="password" placeholder="Пароль" name='password' onChange={fieldValidation}/>
        <label></label>
      </div>
      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"></i>
      </button>
    </form>
  )
}