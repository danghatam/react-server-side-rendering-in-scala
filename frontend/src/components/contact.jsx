import React, {Component} from 'react';
import Store from '../store';
import Actions from '../actions';
import connectToStores from 'alt/utils/connectToStores';

@connectToStores
class Contact extends Component {

    constructor(){
        super();
    }
    static getStores() {
        return [Store];
    }

    static getPropsFromStores() {
        return Store.getState();
    }

    render(){
        return(
            <div>
                <h1>Contact</h1>
                <p><b>Address: </b> {this.props.contact.address}</p>
                <p><b>Phone: </b> {this.props.contact.phone}</p>
                <p><b>Email: </b> {this.props.contact.email}</p>
            </div>
        );
    };
}

export default Contact;