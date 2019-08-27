const axios = require('axios');
const bodyParser = require('body-parser');
jsonParser = bodyParser.json();
const apiEndpoint = 'https://api.openweathermap.org/data/2.5/weather?q='
const apiKey = '&APPID=a1521b63dffc34c9a34891dbfc538c1d'

module.exports.controller = app => {
  app.get('/searchlocation',jsonParser, (req, res) => {
    const city = req.body.city
    const url = apiEndpoint + city + apiKey
    axios.get(url)
      .then((response) => {
        res.send(response.data)
      })
      .catch((error)=>{
        console.log(error);
      });
  })
};
