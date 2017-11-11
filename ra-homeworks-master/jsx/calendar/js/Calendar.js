const arrMonth = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря'
],
  oneDay = 86400000;

 
 function upperFirst(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}


function Calendar({date}) {
  let year = date.getFullYear(),
    month = date.getMonth(),
    dateLM = getStartDateLM(),
    dateTM = new Date(year, month).getTime(),
    weekDay = new Date(year, month).getDay(),
    lastDayTM = new Date(year, month + 1, 0).getDay();


  function getStartDateLM() {
    let lengthLM = new Date(year, month, 0).getDate(),
      firstDayLM = new Date(year, month -1).getTime(),
      startDay;
    for (let i = 0; i < lengthLM; i++) {
      if(new Date(firstDayLM).getDay() === 1) {
        startDay = new Date(firstDayLM);
      }
      firstDayLM += oneDay;
    }
    return startDay.getTime();
  }


  function addWeek() {
    let arrWeek = [],
      isForward = weekDay === 1 ? false : true,
      length = ( (weekDay > 0 && weekDay < 6) || (weekDay === 6 && lastDayTM === 0) ) ? 5 : 6;
    for (let i = 0; i < length; i++) {
      arrWeek.push(<tr>{addDay(isForward)}</tr>);
    }
    return arrWeek;
  }


  function addDay(isForward) {
    let arrDay = [];  
    for (let i = 0; i < 7; i++) {
      let day = isForward === true ? dateLM : dateTM;
      if (new Date(day).getMonth() !== date.getMonth()){
        arrDay.push(<td className="ui-datepicker-other-month">{new Date(day).getDate()}</td>);
      } else {
        new Date(day).getDate() === date.getDate() ? 
          arrDay.push(<td className="ui-datepicker-today">{new Date(day).getDate()}</td>) : 
            arrDay.push(<td>{new Date(day).getDate()}</td>);
      }
      if(isForward){
        dateLM += oneDay;
      }else{
        dateTM += oneDay;
      } 
    }
    return arrDay;
  }

  return (
      <div className="ui-datepicker">
        <div className="ui-datepicker-material-header">
          <div className="ui-datepicker-material-day">{upperFirst(date.toLocaleString("ru", {weekday: 'long'}))}</div>
          <div className="ui-datepicker-material-date">
            <div className="ui-datepicker-material-day-num">{date.toLocaleString("ru", {day: 'numeric'})}</div>
            <div className="ui-datepicker-material-month">{arrMonth[date.getMonth()]}</div>
            <div className="ui-datepicker-material-year">{date.toLocaleString("ru", {year: 'numeric'})}</div>
          </div>
        </div>
        <div className="ui-datepicker-header">
          <div className="ui-datepicker-title">
            <span className="ui-datepicker-month">{upperFirst(date.toLocaleString("ru", {month: 'long'}))}
            </span>&nbsp;<span className="ui-datepicker-year">{date.toLocaleString("ru", {year: 'numeric'})}</span>
          </div>
        </div>
        <table className="ui-datepicker-calendar">
          <colgroup>
            <col/>
            <col/>
            <col/>
            <col/>
            <col/>
            <col className="ui-datepicker-week-end"/>
            <col className="ui-datepicker-week-end"/>
          </colgroup>
          <thead>
            <tr>
              <th scope="col" title="Понедельник">Пн</th>
              <th scope="col" title="Вторник">Вт</th>
              <th scope="col" title="Среда">Ср</th>
              <th scope="col" title="Четверг">Чт</th>
              <th scope="col" title="Пятница">Пт</th>
              <th scope="col" title="Суббота">Сб</th>
              <th scope="col" title="Воскресенье">Вс</th>
            </tr>
          </thead>
          <tbody>{addWeek()}</tbody>
        </table>
      </div>
    )
}

