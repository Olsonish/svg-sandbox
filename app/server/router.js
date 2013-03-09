var path = require('path')
    , fs = require('fs'), json;


module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('home', { title: 'home' });
    });

    app.get('/data', function (req, res) {
        res.render('data', { title: 'data' });
    });
}