var React = require('react');
// Note that Highcharts has to be required separately
var ReactHighcharts = require('react-highcharts');
var Highlight = require('react-highlight');
var ReactDOM = require('react-dom');
var Semantique = require('semantic-ui-react');
var axios = require('axios')

import CommuneList from './CommuneList'

class Commune extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emploi: [],
      pyramide: []
    };
  }

  render() {
    return (
      <div>
        <CommuneList selectMethod={this.props.selectCommune}/>
        < ReactHighcharts config={this.state.emploi}> </ ReactHighcharts >
        < ReactHighcharts config={this.state.pyramide}> </ ReactHighcharts >
      </div>
    );
  }

  componentDidMount() {
    this.updateData(this.props.communes.selectCommune);
  }


  updateData(id) {
    console.log(id);
    if (id) {
      id = 1;
    }
    var filter = {"where": {"COMMUNE_CODE": id}};
    axios.get('http://localhost:3000/api/emplois?filter=' + JSON.stringify(filter))
      .then(res => {
        const emploi = res.data;
        console.log(emploi);
        //this.setState({emploi});
      });
    axios.get('http://localhost:3000/api/pyramides?filter=' + JSON.stringify(filter))
      .then(res => {
        const pyramide = res.data;
        console.log(pyramide);
        this.setState({pyramide});
      });

  }

}

export default Commune;
