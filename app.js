const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const Nexmo = require('nexmo');
const socketio = require('socket.io');

// Initalizing app
const nexmo = new Nexmo({
    apiKey: '5fa1946b',
    apiSecret: 'Jcww7I3BX0w6SPGm'
}, {debug: true})

// Initializing app
const app = express();

// Template engine setup
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// Public folder setup
app.use(express.static(__dirname + '/public'));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Index route
app.get('/', (req, res) => {
    res.render('index');
})

// Catch form submit
app.post('/', (req, res) => {
    const number = req.body.number;
    const text = req.body.text;
});

// Define port
const port = 3000;

// Start server
const server = app.listen(port, () => console.log(`Server started on port ${port}`));
