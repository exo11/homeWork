'use strict';

function FeedbackForm({data, onSubmit}){
  let salutation, name, email, subject, message,  snacks;
  
  function handler() {
    const salutationValue = salutation.querySelector('input[type=radio]:checked'),
      snacksValue = snacks.querySelector('input[type=checkbox]:checked'),
      fieldValues = JSON.stringify({
      	salutation: salutationValue.value,
      	name: name.value,
        email: email.value,
    	  subject: subject.value,
    	  message: message.value,
    	  snacks: snacksValue.value
      });
    onSubmit(fieldValues);
  }
  
  return (
    <form className="content__form contact-form" onSubmit={handler}>
      <div className="testing">
        <p>Чем мы можем помочь?</p>
      </div>
      <div className="contact-form__input-group" ref={element => salutation = element}>
        <input className="contact-form__input contact-form__input--radio" defaultChecked={data.salutation === 'Мистер'} id="salutation-mr" name="salutation" type="radio" value="Мистер"/>
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>
        <input className="contact-form__input contact-form__input--radio" defaultChecked={data.salutation === 'Мисис'} id="salutation-mrs" name="salutation" type="radio" value="Мисис"/>
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>
        <input className="contact-form__input contact-form__input--radio" defaultChecked={data.salutation === 'Мис'}id="salutation-ms" name="salutation" type="radio" value="Мис"/>
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мис</label>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="name">Имя</label>
        <input className="contact-form__input contact-form__input--text" id="name" name="name" type="text" defaultValue={data.name} ref={element => name = element}/>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
        <input className="contact-form__input contact-form__input--email" id="email" name="email" type="email" defaultValue={data.email} ref={element => email = element}/>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
        <select className="contact-form__input contact-form__input--select" id="subject" name="subject" defaultValue={data.subject} ref={element => subject = element}>
          <option>У меня проблема</option>
          <option>У меня важный вопрос</option>
        </select>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
        <textarea className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65" defaultValue={data.message} ref={element => message = element}></textarea >
      </div>
      <div className="contact-form__input-group" ref={element => snacks = element}>
        <p className="contact-form__label--checkbox-group">Хочу получить:</p>
        <input className="contact-form__input contact-form__input--checkbox" defaultChecked={data.snacks[0]=== 'пицца'} id="snacks-pizza" name="snacks" type="checkbox" value="пицца"/>
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
        <input className="contact-form__input contact-form__input--checkbox" defaultChecked={data.snacks[0]=== 'пирог'} id="snacks-cake" name="snacks" type="checkbox" value="пирог"/>
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
      </div>
      <button className="contact-form__button" type="submit" >Отправить сообщение!</button>
      <output id="result" />
  </form>
  )
}