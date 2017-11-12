'use strict';

class App extends React.Component {
  constructor(props) {
  	super({filters, projects});
  	this.state = {
      choice: 'All'
  	};
  }

  handleButtonClick = filter => {
    this.setState({choice: filter})
  }
  
  selectedProjects = () => this.state.choice === 'All' ? projects : 
    projects.filter(project => project.category === this.state.choice);

  render() {
	  return (
	    <div>
        <Toolbar
          filters={filters}
          selected={this.state.choice}
          onSelectFilter={this.handleButtonClick} 
        />
        <Portfolio projects={this.selectedProjects()} />
      </div>
	  )	
  }
}