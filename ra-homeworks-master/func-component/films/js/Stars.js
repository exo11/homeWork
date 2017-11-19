'use strict';

function Stars({count}) {
  let arrStars = []; 
  if (typeof count === 'number' && count < 6 && count > 0) {
    for (let i = 0; i < count; i++) {
    	arrStars.push(<li key={i}><Star/></li>)
    }
  }
  return (
    <ul className="card-body-stars u-clearfix">
      {arrStars}
    </ul>
  ) 
}

Stars.defaultProps = {count: 0};

