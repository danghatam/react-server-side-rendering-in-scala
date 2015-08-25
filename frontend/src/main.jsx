import React from 'react';
import alt from './alt';
import Iso from 'iso';
import Router, {HistoryLocation} from 'react-router';
import router from './routes';

Iso.bootstrap(function (state, meta, container) {
    alt.bootstrap(state);
    router.run(function (Handler) {
        var node = React.createElement(Handler);
        React.render(node, container);
    });
});
