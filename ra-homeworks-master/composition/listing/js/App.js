'use strict';

const App = ({items}) => (
  <main>
    {items.map(item => <Item color={addColor(item)} item={item} />)}
  </main>
)

function addColor(item) {
  if (item.type === 'unisex') {
    return 'black';
  }
  if (item.type === 'male') {
    return 'blue';
  }
  return 'orange';
}  


{/*const App = ({items}) => (
  <main>
    {items.map(item => <ColorItem item={item} />)}
  </main>
)

function ColorItem(props) {
  const color = props.item.type === 'unisex' ? 'black' :
    props.item.type === 'male' ? 'blue' : 'orange';
  return <Item color={color} item={props.item} />
}*/}

