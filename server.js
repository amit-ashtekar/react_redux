

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = new(require('express'))();
const port = 3000;

const config = require('./webpack.config');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    devtool: 'cheap-module-eval-source-map'
}));
app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.json());

//app.post('/auth/getToken/', (req, res) => {
//    if (req.body.email == 'test' && req.body.password == 'test') {
//        res.status(200)
//            .json({access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'});
//    } else {
//        res.sendStatus(403);
//    }
//});
app.post('/auth/getToken',function(req,res){
console.log(req.body);
    if (req.body.username == 'test' && req.body.password == 'test') {
        res.status(200)
            .json({access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'});
    } else {
        res.sendStatus(403);
    }
});
//
//app.get('/getData/', (req, res) => {
//    let token = req.headers['authorization'];
//    if (!token) {
//        res.sendStatus(401);
//    } else {
//        try {
//            let decoded = jwt.verify(token.replace('Bearer ', ''), 'secret-key');
//            res.status(200)
//                .json({data: 'Valid JWT found! This protected data was fetched from the server.'});
//        } catch (e) {
//            res.sendStatus(401);
//        }
//    }
//})
//
//app.get('/', (req, res) => {
//    res.sendFile(__dirname + '/dist/index.html');
//});

//app.listen(port, (error) => {
//    if (error) {
//        console.error(error);
//    } else {
//        console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
//    }
//});

app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> ?  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
})
