'use strict';

const obj = {};
obj.mainTitle = 'React';
obj.sections = [
  {title:'Компоненты', text: 'Каждый компонент является ...'},
  {title:'Выучил раз, используй везде!', text: 'После изучения React ...'},
  {title:'Использование JSX', text: 'JSX является языком ...'}
];

class Accordian extends React.Component {
  
  titleHandler(event) {
  	if (event.target.classList.contains('sectionhead')) {
  		event.currentTarget.classList.toggle('open');
  	}
  }

  render() {
  	const {mainTitle, sections} = this.props.items;
  	return (
      <main className="main">
        <h2 className="title">{mainTitle}</h2>
        {sections.map(section => 
        	<Section 
        	  title={section.title} 
        	  text={section.text} 
            handler={this.titleHandler}
          />)  
        }
      </main>
  	)
  }
}


function Section(props) {
	return (
    <section 
      className="section"
      onClick={props.handler}
    >  
      <button>toggle</button>
      <h3 className="sectionhead">{props.title}</h3>
      <div className="articlewrap">
        <div className="article">
          {props.text}
        </div>
      </div>
    </section>
  )
}

ReactDOM.render(<Accordian items={obj} />,
  document.getElementById('accordian'));