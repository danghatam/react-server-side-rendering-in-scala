import React, {Component} from 'react';
import Store from '../store';
import Actions from '../actions';
import connectToStores from 'alt/utils/connectToStores';

@connectToStores
class Info extends Component {

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
                <h1>Name: {this.props.info.name}</h1>
                <p><b>Age: </b> {this.props.info.age}</p>
                <p><b>Career: </b> {this.props.info.career}</p>
            </div>
        );
    };
}

export default Info;
