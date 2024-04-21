// optional: allow environment to specify port
const port = process.env.PORT || 8080

// wire up the module
const express = require('express')
const history = require('connect-history-api-fallback');
// create server instance
const app = express()
// bind the request to an absolute path or relative to the CWD
// app.use(express.static('dist'))

const staticFileMiddleware = express.static('../dist');

app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));

app.use(staticFileMiddleware);

app.get('/', function (req, res) {
  res.render('../dist/index.html');
});

// start the server
app.listen(port, () => console.log(`Listening on port ${port}`))
