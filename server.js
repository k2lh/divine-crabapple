/* eslint-disable */
// this is mostly here to see if heroku is happier with a server
const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  'preflightContinue': false,
  'optionsSuccessStatus': 204,
  'withCredentials': true
}));

app.use(history({index: '/index.html'}));
app.use(compression());

app.use('/', express.static(__dirname + '/dist'));
app.listen(port, function() { console.log('zipzipzip on port ' + port); });
