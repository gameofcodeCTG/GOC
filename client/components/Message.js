import React, {Component} from 'react';
import {Link} from 'react-router';
import {Card} from 'semantic-ui-react';

class Message extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Card>
                <Card.Content>
                    <Card.Header>{this.props.message.titre}</Card.Header>
                    <Card.Meta>{this.props.message.auteur}</Card.Meta>
                    <Card.Description>{this.props.message.contenu}</Card.Description>
                </Card.Content>
                </Card>
                );
    }
}

export default Message;
