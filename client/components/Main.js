import React, {Component} from 'react';
import {Link} from 'react-router';
import {Container} from 'semantic-ui-react';
import AppMenu from './AppMenu';

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <Container>
                    <AppMenu></AppMenu>
                    {React.cloneElement(this.props.children, this.props)}
                </Container>
                );
    }
}
;

export default Main;