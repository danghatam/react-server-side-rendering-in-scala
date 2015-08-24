import Express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Hello from './src/components/hello';
import alt from './src/alt';
import Iso from 'iso';

let app = Express();

app.post('/', (req, res) => {
    console.log(req);
    alt.bootstrap(JSON.stringify({
      HelloStore: {
          name: 'bear'
      }
    }));
    let iso = new Iso();
    let htmlStr = ReactDOM.renderToString(<Hello />);
    iso.add(htmlStr, alt.flush());
    res.send(iso.render());
});

let server = app.listen(3000, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`App is listening at http://${host}:${port}`)
});
