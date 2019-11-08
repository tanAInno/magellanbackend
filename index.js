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
mongoose.connect('mongodb://localhost/resthub',{ useNewUrlParser: true });
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

moment = require('moment')

let data = ""
let pm1 = ""
let pm25 = ""
let pm10 = ""
let humid = ""
let temp = ""
let fan = ""
let filter = ""
let weather = ""
let aqi = ""

async function getData() {
    await axios.get("http://www.skytec.in.th/ekarat/now.php?sen_id=2")
        .then(response => {
            data = response.data + ""
            console.log(data)
        }).catch(error => console.log(error))
}

async function postData() {
    let array = data.split(",")
    await axios.post("http://localhost:8686/api/skytecs", {
        sensorId: array[0],
        date: array[1],
        time: array[2],
        digital1: array[3],
        digital2: array[4],
        digital3: array[5],
        digital4: array[6],
        analog0: array[7],
        analog5: array[8],
        humid: array[9],
        temp1: array[10],
        temp2: array[11],
        temp3: array[12],
        temp4: array[13],
    }).catch(error => console.log(error))
}

async function getPM1() {
    await axios.get("http://blynk-cloud.com/TZlt1XM4Hx8GRvDeBJQHiy79WgiyEw7Y/get/v1")
        .then(response => {
            pm1 = response.data[0]
    }).catch(error => console.log(error))
}

async function getPM25() {
    await axios.get("http://blynk-cloud.com/TZlt1XM4Hx8GRvDeBJQHiy79WgiyEw7Y/get/v2")
        .then(response => {    
            pm25 = response.data[0]
    }).catch(error => console.log(error))
}

async function getPM10() {
    await axios.get("http://blynk-cloud.com/TZlt1XM4Hx8GRvDeBJQHiy79WgiyEw7Y/get/v3")
    .then(response => {    
        pm10 = response.data[0]
    }).catch(error => console.log(error))
}

async function getHumid() {
    await axios.get("http://blynk-cloud.com/TZlt1XM4Hx8GRvDeBJQHiy79WgiyEw7Y/get/v5")
    .then(response => {    
        humid = response.data[0]
    }).catch(error => console.log(error))
}

async function getTemp() {
    await axios.get("http://blynk-cloud.com/TZlt1XM4Hx8GRvDeBJQHiy79WgiyEw7Y/get/v6")
    .then(response => {    
        temp = response.data[0]
    }).catch(error => console.log(error))
}

async function getFan() {
    await axios.get("http://blynk-cloud.com/TZlt1XM4Hx8GRvDeBJQHiy79WgiyEw7Y/get/v7")
    .then(response => {    
        fan = response.data[0]
    }).catch(error => console.log(error))
}

async function getFilter() {
    await axios.get("http://blynk-cloud.com/TZlt1XM4Hx8GRvDeBJQHiy79WgiyEw7Y/get/v8")
    .then(response => {    
        filter = response.data[0]
    }).catch(error => console.log(error))
}

async function getWeather() {
    await axios.get("http://blynk-cloud.com/TZlt1XM4Hx8GRvDeBJQHiy79WgiyEw7Y/get/v9")
    .then(response => {    
        weather = response.data[0]
    }).catch(error => console.log(error))
}

async function getAqi() {
    await axios.get("http://blynk-cloud.com/TZlt1XM4Hx8GRvDeBJQHiy79WgiyEw7Y/get/v10")
    .then(response => {    
        aqi = response.data[0]
    }).catch(error => console.log(error))
}

async function postBlynk() {
    let date = new Date
    let format_date = moment(new Date).format('DD/MM/YYYY HH:mm:ss')+""
    await axios.post("http://localhost:8686/api/blynks", {
        pm1: pm1,
        pm25: pm25,
        pm10: pm10,
        humid: humid,
        temp: temp,
        fan: fan,
        filter: filter,
        weather: weather,
        aqi: aqi,
        datetime: format_date
    })
}

function getBlynk () {
    getPM1()
    getPM10()
    getPM25()
    getHumid()
    getTemp()
    getFan()
    getFilter()
    getWeather()
    getAqi()
}

getData()
getBlynk()

setInterval(() => {
    getData()
    getBlynk()
}, 60000)

setInterval(() => {
    postData()
    postBlynk()
}, 60000)
