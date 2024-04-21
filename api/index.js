// optional: allow environment to specify port
const port = process.env.PORT || 3000;

// wire up the module
const express = require('express')
// const history = require('connect-history-api-fallback');
const path = require('path');
// create server instance
const app = express()
// bind the request to an absolute path or relative to the CWD
// app.use(express.static('dist'))
app.use(express.static('public'));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

// const staticFileMiddleware = express.static('../dist');
// const staticFileMiddleware = express.static(path.join(__dirname + '../dist'));

// app.use(staticFileMiddleware);
// app.use(history({
//   disableDotRule: true,
//   verbose: true
// }));

// app.use(staticFileMiddleware);

// app.get('/', function (req, res) {
//   res.render('../dist/index.html');
// });

// app.get('/', function (req, res) {
//   res.render(path.join(__dirname + '../dist/index.html'));
// });

app.listen(port, () => console.log(`Listening on port ${port}`))
