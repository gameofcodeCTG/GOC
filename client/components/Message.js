import React, {Component} from 'react';
import {Link} from 'react-router';
import {Card} from 'semantic-ui-react';
import {isEmpty} from '../utils/index';

class Message extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const auteur = isEmpty(this.props.message.auteur) ? "" : this.props.message.auteur;
        return (
                <Card>
                <Card.Content>
                    <Card.Header>{this.props.message.titre}</Card.Header>
                    <Card.Meta>{auteur}</Card.Meta>
                    <Card.Description>{this.props.message.contenu}</Card.Description>
                </Card.Content>
                </Card>
                );
    }
}

export default Message;
