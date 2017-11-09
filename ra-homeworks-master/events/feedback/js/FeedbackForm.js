'use strict';
 
function FeedbackForm(props) {
  let {salutation, name, subject, message, email, snacks} = props.data,
    form;
  
  
  function submitHandler(event) {
    event.preventDefault();
    if (typeof props.onSubmit !== 'function') {
      throw new Error('props.onSubmit is not a function !');
      return;
    }
    const fieldValues = JSON.stringify({
      salutation: Array.from(form['salutation'])
        .filter(input => input.checked)[0].value,
      name: form['name'].value,
      email: form['email'].value,
      subject: form['subject'].value,
      message: form['message'].value,
      snacks: Array.from(form['snacks'])
        .filter(input => input.checked)[0].value
    });
    props.onSubmit(fieldValues);
  }


  function isCheckedSalutation(value) {
    return salutation === value;
  }

  
  function isCheckedSnacks(value) {
    return snacks[0] === value;
  }

  
  return (
    <form className="content__form contact-form" onSubmit={submitHandler}  ref={el => form = el}>
      <div className="testing">
        <p>Чем мы можем помочь?</p>
      </div>
      <div className="contact-form__input-group">
        <input className="contact-form__input contact-form__input--radio" id="salutation-mr" name="salutation" type="radio" value="Мистер" defaultChecked={isCheckedSalutation('Мистер')}/>
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>
        <input className="contact-form__input contact-form__input--radio" id="salutation-mrs" name="salutation" type="radio" value="Мисис" defaultChecked={isCheckedSalutation('Мисис')}/>
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>
        <input className="contact-form__input contact-form__input--radio" id="salutation-ms" name="salutation" type="radio" value="Мис" defaultChecked={isCheckedSalutation('Мис')}/>
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мис</label>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="name">Имя</label>
        <input className="contact-form__input contact-form__input--text" id="name" name="name" type="text" defaultValue={name}/>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
        <input className="contact-form__input contact-form__input--email" id="email" name="email" type="email" defaultValue={email}/>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
        <select className="contact-form__input contact-form__input--select" id="subject" name="subject" defaultValue={subject}>
          <option>У меня проблема</option>
          <option>У меня важный вопрос</option>
        </select>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
        <textarea className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65" defaultValue={message}></textarea>
      </div>
      <div className="contact-form__input-group">
        <p className="contact-form__label--checkbox-group">Хочу получить:</p>
        <input className="contact-form__input contact-form__input--checkbox" id="snacks-pizza" name="snacks" type="checkbox" value="пицца" defaultChecked={isCheckedSnacks('пицца')}/>
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
        <input className="contact-form__input contact-form__input--checkbox" id="snacks-cake" name="snacks" type="checkbox" value="пирог" defaultChecked={isCheckedSnacks('пирог')}/>
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
      </div>
      <button className="contact-form__button" type="submit" >Отправить сообщение!</button>
      <output id="result" />
    </form>
  )
}



