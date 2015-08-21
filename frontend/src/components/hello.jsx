import React, {Component} from 'react';

class Hello extends Component {

    constructor(){
        super();
        this.state = {
            time: new Date().toString()
        };
    }

    getTime(){
        this.setState({
            time: new Date().toString()
        });
        console.log("click me baby");
    }

    render(){
        return(
            <div>
                <h1>Hello {this.props.name}</h1>
                <p>Now: {this.state.time}</p>
                <button onClick={this.getTime.bind(this)}>What time?</button>
            </div>
        );
    };
}

export default Hello;
