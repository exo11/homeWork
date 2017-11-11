'use strict';

function Stars({count}) {
  let arrStars = []; 
  for (let i = 0; i < count; i++) {arrStars.push(<li key={i}><Star/></li>)}
  return (
    <ul className="card-body-stars u-clearfix">
      {(typeof count === 'number' && count > 0 && count < 6) ? arrStars : null}
    </ul>
  ) 
}
