'use strict';

fetch(`https://neto-api.herokuapp.com/etsy`)
  .then(res => res.json())
  .then(arr => {ReactDOM.render(<Listing items={arr} />,
    document.getElementById('root'))});

function Listing({items}) {
  const list = items.map(item => (
    <div className="item" key={item.listing_id}>
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN}/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">
          {getTitleLength(item.title)}
        </p>
        <p className="item-price">
          {getCurrencuCode(item)}
        </p>
        <p className={getQuantityLevel(item.quantity)}>
          {item.quantity} left
        </p>
      </div>
    </div>
    )
  );
  return <div className="item-list">{list}</div>    
}

Listing.defaultProps = { items: [] }


function getTitleLength(title) {
  return title.length > 50 ? (title.substr(0,50) + ' ...') : title;
}


function getCurrencuCode(item) {
  if (item.currency_code === 'USD') {
    return '$' + item.price;
  }
  if (item.currency_code === 'EUR') {
    return '€' + item.price;
  }
  return item.price + ' ' + item.currency_code;
}


function getQuantityLevel(quantity) {
  if (quantity <= 10) {
    return 'item-quantity level-low';
  }
  if (quantity <= 20) {
    return 'item-quantity level-medium';
  }
  return 'item-quantity level-high';
}