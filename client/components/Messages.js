import React, {Component} from 'react';
import {Link} from 'react-router';
import {Card} from 'semantic-ui-react';
import Message from './Message';

class Messages extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <div>
                    <h3>Messages</h3>
                    <Card.Group itemsPerRow={4}>
                       {this.props.messages.map((message, i) => <Message {...this.props} key={i} i={i} message={message} />)}
                    </Card.Group>
                </div>
                );
    }
}
;

export default Messages;