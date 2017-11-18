'use strict';

class App extends React.Component {
	
  componentWillMount() {
		this.setState({
			data: [],
			series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
			labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
			colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C'],
    })
	}

	componentDidMount() {
		populateArray.bind(this)();
		setInterval(populateArray.bind(this), 2000);
	}

	render() {
		const types = [ 
      verticalStandard, 
      verticalStacked,
      verticalLayered, 
      horizontalStandard
    ];
    const content = [
      this.state.labels, 
      this.state.labels, 
      this.state.labels, 
      this.state.series
    ];
    
    return (
      <section>
        {types.map((type, typeIndex) => 
          <Charts 
            {...this.state} 
            type={type} 
            content={content[typeIndex]} 
          />
        )}
        <Legend 
          labels={this.state.labels} 
          colors={this.state.colors} 
        />
      </section>
    )
	}
}


function Charts(props) {
  const chartsSerie = props.data.map((serie, serieIndex) => {
    return (
      <ChartsSerie 
        {...props}
        serie={serie}
        serieIndex={serieIndex}
        sum={getSum(serie)}
        sortedSerie={getSortedSerie(serie)}
      />
    )
  });
  return (<div className={props.type[0]}>{chartsSerie}</div>)
}


function ChartsSerie(props) {
  const chartsItem = props.serie.map((item, itemIndex) => {
    return (
      <ChartsItem 
        {...props}
        item={item}
        itemIndex={itemIndex}
      />
    )
  });
  return ( 
    <div 
      className={props.type[1]}
      key={props.serieIndex}
      style={chartsSerieStyle(props.type[0])}
    >
      <label>{props.content[props.serieIndex]}</label>
      {chartsItem}
    </div>
  )
}


function ChartsItem(props) {
  return (
    <div
      className={props.type[2]}
      style={chartsItemStyle(props)}
      key={props.itemIndex}
    >
      <b style={{ color: props.colors[props.itemIndex] }}>
        {props.item}
      </b>
    </div>
  )
}


function Legend({labels, colors}) {
  const legendItem = labels.map((label, labelIndex) => {
    return (
      <div>
        <span 
          className="Legend--color" 
          style={{backgroundColor: colors[labelIndex % colors.length]}} 
        />
          <span className="Legend--label">{label}</span>
        </div>
    )
  });
  return <div className="Legend">{legendItem}</div>
}


function getMax(data) {
  return data.reduce((max, serie) => 
    Math.max(max, serie.reduce((serieMax, item) => 
      Math.max(serieMax, item), 0)), 0);
}

function chartsSerieStyle(type) {
  return type === 'Charts horizontal' ? 
    {height: 'auto'} : {height: 250};
}

function chartsItemStyle(props) {
  const max = getMax(props.data),
    color = props.colors[props.itemIndex],
    size = props.item / 
      (props.type[1] === 'Charts--serie stacked' ? props.sum : max) * 100,
    style = {
      backgroundColor: color,
      opacity: props.item/max + 0.05,
      zIndex: props.item
    };
  
  if (props.type[0] === 'Charts horizontal') { 
    style.width = size + '%';
    return style;
  }
  if (props.type[1] === 'Charts--serie stacked') {
    style.opacity = 1;
  } else if (props.type[1] === 'Charts--serie layered') { 
    style.right = ((props.sortedSerie.indexOf(props.item) / 
      (props.serie.length + 1)) * 100) + '%';
  }
  style.height = size + '%';
  return style;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

function populateArray() {
  const series = 5,
    serieLength = 5;
  let data = new Array(series).fill(new Array(serieLength).fill(0));
  data = data.map(serie => serie.map(item => getRandomInt(0, 20)));
  this.setState({ data });
}

function getSortedSerie(serie) {
  return serie.slice(0).sort(compareNumbers);
}

function getSum(serie) {
  return serie.reduce((carry, current) => carry + current, 0)
}

const verticalStandard = ['Charts','Charts--serie','Charts--item'],
  verticalStacked = ['Charts','Charts--serie stacked','Charts--item stacked'],
  verticalLayered = ['Charts', 'Charts--serie layered','Charts--item layered'],
  horizontalStandard = ['Charts horizontal','Charts--serie','Charts--item'];
