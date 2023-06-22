// require('dotenv').config()
// const express = require('express')
// const app = express()
// Modules and Globals
require('dotenv').config();
var express = require('express');
var app = express();
var methodOverride = require('method-override');
// Express Settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.get('/', function (_req, res) {
    res.render('home');
});
app.use('/places', require('./controllers/places'));
app.get('/', function (_req, res) {
    res.send('Rest Rant !');
});
app.get('*', function (req, res) {
    res.render('error404');
});
app.listen(process.env.PORT);

//# sourceMappingURL=index.js.map
