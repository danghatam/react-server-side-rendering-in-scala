import React, {Component} from 'react';
import Store from '../store';
import Actions from '../actions';
import connectToStores from 'alt/utils/connectToStores';

@connectToStores
class About extends Component {

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
                <h1>About Me</h1>
                <p>{this.props.about}</p>
            </div>
        );
    };
}

export default About;