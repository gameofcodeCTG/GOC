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
        <Form.Field label='Commune ' id='communeSelector' placeholder='Commune' control='select' onChange = {(e) => this.selectCommune(e)}>
          {this.state.communeList.map((commune,i) =>
            <option key={i} value={commune.COMMUNE_CODE}>{commune.COMMUNE_NOM}</option>
          )}
        </Form.Field>
      </div>
  );
  }

  selectCommune(e) {
    const select = document.getElementById('communeSelector');
    const value = select.value.trim();
    this.props.selectMethod(value);
  }
}

export default CommuneList;
