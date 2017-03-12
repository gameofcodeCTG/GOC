import React, {Component}
from 'react';
import {Link}
from 'react-router';
import {Card}
from 'semantic-ui-react';
import { Form, Input, Checkbox, Button, TextArea, Select }
from 'semantic-ui-react'
        import {isEmpty}
from '../utils/index';
import ReactDOM  from 'react-dom';


class AddMessage extends Component {

    constructor(props) {
        super(props);
        this.selectChange = this.selectChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        this.props.fetchServiceCategories();
    }

    selectChange(event,result) {
        event.preventDefault();
        this.serviceCode = result.value;
    }

    handleClick(event) {
        event.preventDefault();

        console.log("Contenu " + this.textMessage.valueOf());
        const contenu = ReactDOM.findDOMNode(this.textMessage).value;
        const titre = ReactDOM.findDOMNode(this.textTitre).value;
        const service = this.serviceCode;
        const auteur = "Gambolino Nil";
        const dateCreation = new Date();
        const dateExpiration = new Date();
        dateExpiration.setDate(dateCreation.getDate() + 14);
        const message = {
            "dateCreation": dateCreation,
            "dateExpiration": dateExpiration,
            "titre": titre,
            "contenu": contenu,
            "commune": {"code":1},
            "quartier": null,
            "service_category": {"code":service},
            "auteur": "Guido Amabili"
        };
        this.props.postMessage(message );
    }

    render() {
        const options = [];
        this.props.servicescategories.map((sc, i) => {
            options.push({key: sc.code, value: sc.code, text: sc.label});
        });
        return (
                <div>
                    <Link to="/messages">Retour aux messages</Link>
                    <Form>
                        <Form.Field>
                            <label>Catégorie</label>
                            <Form.Field control={Select} options={options} id="serviceCatSelect" onChange={this.selectChange} ref={(input) => {
                        this.serviceDropbox = input;
                                        }} >
                
                            </Form.Field>
                        </Form.Field>
                        <Form.Field>
                            <label>Titre</label>
                            <input placeholder='Titre' ref={(input) => {
                            this.textTitre = input;
                                   }} />
                        </Form.Field>
                        <Form.Field>
                            <label>Message</label>
                            <TextArea placeholder='Message' ref={(input) => {
                                this.textMessage = input;
                                      }} />
                        </Form.Field>
                
                        <Button type='submit' onClick={this.handleClick}>Submit</Button>
                    </Form>
                </div>
                            );
    }
}

export default AddMessage;
