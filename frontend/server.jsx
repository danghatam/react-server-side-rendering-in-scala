import Express from 'express';
import BodyParser from 'body-parser';
import React from 'react';
import alt from './src/alt';
import Iso from 'iso';
import {Routes} from './src/routes';
import Router from 'react-router';

let app = Express();

app.use(BodyParser.json());


app.get('/', (req, res) => {

    alt.bootstrap(JSON.stringify({
      Store: JSON.parse(req.query.data)
    }));
    let iso = new Iso();
    Router.run( Routes, `/${req.query.reacturl}`, function (Handler) {
        let htmlStr = React.renderToString(<Handler />);
        iso.add(htmlStr, alt.flush());
        res.send(iso.render());
    });
});

let server = app.listen(3000, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`App is listening at http://${host}:${port}`)
});
