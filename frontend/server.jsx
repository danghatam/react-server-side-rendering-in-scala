import Express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Hello from './src/components/hello';

let app = Express();

app.get('/', (req, res) => {
    res.send(ReactDOM.renderToString(<Hello name='Bear' />));
});

app.get('/hello', ( req, res) => {
    res.send("Bear, " + new Date().toString());
});

let server = app.listen(3000, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`App is listening at http://${host}:${port}`)
});
