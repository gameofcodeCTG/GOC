import React, {Component} from 'react';
import {Link} from 'react-router';
import {Card} from 'semantic-ui-react';
import { Header, Segment, Button} from 'semantic-ui-react'
import Message from './Message';
import {browserHistory} from 'react-router';

class Messages extends Component {
    
    constructor(props) {
        super(props);
    }

    handleClick(event){
        event.preventDefault();
        browserHistory.push('./messages/add/0001');
    }

    componentWillMount() {
        this.props.fetchMessages();
    }
    render() {
        const {messages, loading, error} = this.props;

        return (
                <div>
                    <Segment clearing>
                        <Header as='h2' floated='left'>
                            Messages
                        </Header>
                        <Link floated='right' to="messages/add/new">Ajouter un message</Link>
                    </Segment>
                    <Card.Group itemsPerRow={4}>
                        {this.props.messages.map((message, i) => <Message {...this.props} key={i} i={i} message={message} />)}
                    </Card.Group>
                </div>
                );
    }
}
;

export default Messages;