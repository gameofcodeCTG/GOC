var React = require('react');
var Semantic, {Form} = require('semantic-ui-react');
var axios = require('axios')

class CommuneList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      communeList: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/communes')
      .then(res => {
        const communeList = res.data;
        this.setState({communeList});
      });
  }

  render() {
    return (
      <div>
        <Form.Field label='Commune '  placeholder='Commune' control='select'>
          {this.state.communeList.map(commune =>
            <option value='{commune.COMMUNE_CODE}'>{commune.COMMUNE_NOM}</option>
          )}
        </Form.Field>
      </div>
  );
  }
}

export default CommuneList;
