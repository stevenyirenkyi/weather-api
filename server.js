const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const axios = require('axios');

const app = express();
const router = express.Router();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

fs.readdirSync("API").forEach(function (file) {
  if(file.substr(-3) == ".js") {
    const route = require("./API/" + file)
    route.controller(app)
  }
})

router.get( '/', function( req, res ) {
  res.json({ message: 'API Initialized' })
});

const port = process.env.API_PORT || 8082;
app.use( '/', router );
app.listen( port, function() {
  console.log( `api running on ${port}` );
});

// app.post('/test', (req, res) => {
//   res.json({requestBody: req.bo})
// })

// axios.get('https://api.openweathermap.org/data/2.5/weather?q=Accra&APPID=a1521b63dffc34c9a34891dbfc538c1d')
//   .then((response) => {
//     console.log(response.data)
//   })
//   .catch((error)=>{
//     // console.log(error);
//   });
