
const SubscribeForm = () => {
  
  function handleForm(event) {
    const ecTcL = event.currentTarget.classList,
      validate = event.target.validity.valid;
    if (! event.target.value) {
      ecTcL.remove('is-error','is-valid');
    } else {
      ecTcL.toggle('is-valid', validate);
      ecTcL.toggle('is-error', ! validate);
    }
  }
  
  return (
    <div className="subscribe__form">
      <form className="form form--subscribe" onChange={handleForm}>
        <h4 className="form-title">Подписаться:</h4>
          <div className="form-group">
            <label htmlFor="input-email" className="sr-only">Email</label>
            <input 
              type="email" 
              id="input-email" 
              placeholder="Email" 
              className="form-control"
            />
            <div className="form-error">
              Пожалуйста, проверьте корректность адреса электронной почты
            </div>
            <button type="submit" className="form-next">
              <i className="material-icons">keyboard_arrow_right</i>
            </button>
         </div>
      </form>
   </div>
  )

};

