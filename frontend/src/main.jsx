import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/hello';
import alt from './alt';
import Iso from 'iso';

window.onload = function(){
    Iso.bootstrap(function (state, meta, container) {
        alt.bootstrap(state);
        ReactDOM.render(<Hello />, container);
    });
}
