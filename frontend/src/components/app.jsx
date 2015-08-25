import React, {Component} from 'react';
import { RouteHandler, Link } from 'react-router';

class App extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to='info'>Info</Link>
                    <Link to='about'>About</Link>
                    <Link to='contact'>Contact</Link>
                </nav>
                <RouteHandler />
            </div>
        );
    }
}

export default App;

