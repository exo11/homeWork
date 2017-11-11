'use strict';

fetch(`https://neto-api.herokuapp.com/etsy`)
  .then(res => res.json())
  .then(arr => {ReactDOM.render(<Listing items={arr} />,document.getElementById('root'))});

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
          {item.title.length > 50 ? (item.title.substr(0,50) + ' ...') : item.title}
        </p>
        <p className="item-price">
          {item.currency_code === 'USD' ? ('$' + item.price) :
            item.currency_code === 'EUR' ? ('€' + item.price) :
              (item.price + ' ' + item.currency_code)}
        </p>
        <p className={item.quantity <= 10 ? 'item-quantity level-low' : 
          item.quantity <= 20 ? 'item-quantity level-medium' : 
            'item-quantity level-high'}>
          {item.quantity} left
        </p>
      </div>
    </div>
    )
  );
  return <div className="item-list">{list}</div>    
}

Listing.defaultProps = { items: [] }

