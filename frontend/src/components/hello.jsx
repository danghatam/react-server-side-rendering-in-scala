import React, {Component} from 'react';
import Store from '../store';
import Actions from '../actions';
import connectToStores from 'alt/utils/connectToStores';

@connectToStores
class Hello extends Component {

    constructor(){
        super();
        //this.state = {
        //    time: new Date().toString()
        //};
    }
    static getStores() {
        return [Store];
    }

    static getPropsFromStores() {
        return Store.getState();
    }

    getTime(){
        console.log("click me baby");
        //this.setState({
        //    time: new Date().toString()
        //});
    }

    render(){
        return(
            <div>
                <h1>Hello {this.props.name}</h1>
                <button onClick={this.getTime.bind(this)}>What time?</button>
            </div>
        );
    };
}

export default Hello;
