// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialize the app
let app = express();
// Import routes
let apiRoutes = require("./api-routes")
// Init cors
let cors = require('cors');
// Configure bodyparser to handle post requests
let axios = require('axios');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://mongodb:27017/resthub',{ useNewUrlParser: true });
var db = mongoose.connection;
// Setup server port
var port = process.env.PORT || 8686;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Use Api routes in the App
app.use('/api', apiRoutes)
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});

let data = ""

async function getData() {
    await axios.get("http://www.skytec.in.th/ekarat/now.php?sen_id=2")
        .then(response => {
            data = response.data + ""
            console.log(data)
        }).catch(error => console.log(error))
}

async function postData() {
    await axios.post("http://localhost:8686/api/skytecs", {
        data: data
    }).catch(error => console.log(error))
}

getData()

setInterval(() => {
    getData()
}, 60000)

setInterval(() => {
    postData()
}, 60000)
