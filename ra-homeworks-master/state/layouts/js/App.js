'use strict';

const VIEW_LIST = "view_list";
const VIEW_MODULE = "view_module";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     view: true 
    };
  }

  view = () => this.state.view === true ? false : true;
  
  render() {
    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon={this.view() === true ? VIEW_LIST : VIEW_MODULE}
            onSwitch={() => {this.setState({view: this.view()})}} 
          />
        </div>
        {this.renderLayout(this.view())}
      </div>
    );
  }

  renderLayout(cardView) {
    if (cardView) {
      return (
        <CardsView
          layout={this.props.layout}
          cards={this.getShopItems(this.props.products, cardView)} 
        />
      );
    }
    return (<ListView items={this.getShopItems(this.props.products, cardView)} />);
  }

  getShopItems(products, cardView) {
    return products.map(product => {
      let cardProps = {
        title: product.name,
        caption: product.color,
        img: product.img,
        price: `$${product.price}`
      };
      if (cardView) {
        return (
          <ShopCard {...cardProps}/>
        );
      }
      return (<ShopItem {...cardProps}/>)
    });
  }
}
