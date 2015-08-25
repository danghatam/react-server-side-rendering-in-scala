import React, {Component} from 'react';
import Router, {Route, Redirect, HistoryLocation} from 'react-router';
import App from './components/app';
import Info from './components/info';
import About from './components/about';
import Contact from './components/contact';

// Components
const Routes = (
    <Route handler={App} path='/'>
        <Route name='info' path='/info' handler={Info}/>
        <Route name='about' path='/about' handler={About}/>
        <Route name='contact' path='/contact' handler={Contact}/>
    </Route>
);

let routerConfig = {
    routes: Routes
};

if (typeof window !== 'undefined') {
    routerConfig.location = HistoryLocation;
}

let router = Router.create(routerConfig);
export default router;
export {Routes};