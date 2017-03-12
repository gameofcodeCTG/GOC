var React = require('react');
// Note that Highcharts has to be required separately
var ReactHighcharts = require('react-highcharts');
var Highlight = require('react-highlight');
var ReactDOM = require('react-dom');
var Semantique = require('semantic-ui-react');
var axios = require('axios')

import CommuneList from './CommuneList'

var a = require('../data/emploi').emploi;
var b = require('../data/pyramide').pyramide;

class Commune extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emploi: a,
      pyramide: b
    };

    this.updateData = this.updateData.bind(this);
  }

  render() {
    return (
      <div>
        <CommuneList selectMethod={this.updateData}/>
        < ReactHighcharts config={this.state.emploi}> </ ReactHighcharts >
        < ReactHighcharts config={this.state.pyramide}> </ ReactHighcharts >
      </div>
    );
  }

  componentDidMount() {
    this.updateData(this.props.communes.selectCommune);
  }


  updateData(id) {
    if (typeof id === 'undefided') {
      id = 1;
    }
    var filter = {"where": {"COMMUNE_CODE": id}};
    axios.get('http://localhost:3000/api/emploi_histos?filter=' + JSON.stringify(filter))
      .then(res => {
        const emploi = res.data[0];
        if (typeof emploi !== 'undefided') {
          this.state.emploi.series[0].data = [emploi.EMPLOI_2009_03_31, emploi.EMPLOI_2010_03_31, emploi.EMPLOI_2011_03_31, emploi.EMPLOI_2012_03_30, emploi.EMPLOI_2013_03_29, emploi.EMPLOI_2014_03_31, emploi.EMPLOI_2015_03_31, emploi.EMPLOI_2016_03_31];
          this.setState(this.state);
        }
      });
    axios.get('http://localhost:3000/api/pyramides?filter=' + JSON.stringify(filter))
      .then(res => {
        this.state.pyramide.series = buildPyramideSerie(res.data);
        this.setState(this.state);
      });
    this.setState(this.state);
  }
}

function buildPyramideSerie(data) {
  var result = [];
  for (var i =0; i < data.length; i++) {
    result.push({name:data[i].SEXE, data: [data[i].AGE00_05, data[i].AGE05_10, data[i].AGE10_15, data[i].AGE15_20, data[i].AGE20_25, data[i].AGE25_30, data[i].AGE30_35, data[i].AGE35_40, data[i].AGE40_45, data[i].AGE45_50, data[i].AGE50_55, data[i].AGE55_60, data[i].AGE60_65, data[i].AGE65_70, data[i].AGE70_75, data[i].AGE75_80, data[i].AGE80_85, data[i].AGE85_90, data[i].AGE90_95, data[i].AGE95_100, data[i].AGE100_]});
  }
  return result;
}

export default Commune;
