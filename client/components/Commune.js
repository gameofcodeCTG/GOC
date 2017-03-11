var React = require('react');
// Note that Highcharts has to be required separately
var ReactHighcharts = require('react-highcharts');
var Highlight = require('react-highlight');
var ReactDOM = require('react-dom');
var Semantique = require('semantic-ui-react');
import CommuneList from './CommuneList'

var emploi = require('../data/emploi').emploi;
var pyramide = require('../data/pyramide').pyramide;

class Commune extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CommuneList />
        < ReactHighcharts config={emploi}> </ ReactHighcharts >
        < ReactHighcharts config={pyramide}> </ ReactHighcharts >
      </div>
    );
  }
}

export default Commune;
