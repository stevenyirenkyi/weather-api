const axios = require('axios');
const bodyParser = require('body-parser');
jsonParser = bodyParser.json();
const apiEndpoint = 'https://api.openweathermap.org/data/2.5/weather?q='
const apiKey = '&APPID=a1521b63dffc34c9a34891dbfc538c1d'

module.exports.controller = app => {
  app.post('/searchlocation', (req, res) => {
    const city = req.body.city
    const urls = apiEndpoint + city + apiKey
    axios({
      method: 'get',
      url: urls,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        res.send(response.data);
      })
      .catch(()=>{
        
      });
  })
};

// module.exports.controller = app => {
//   app.post('/searchlocation', (req, res) => {
//     const city = req.body.city
//     const url = apiEndpoint + city + apiKey
//     axios.get(url)
//       .then((response) => {
//         res.send(JSON.parse(JSON.stringify(response)));
//       })
//       .catch((error)=>{
//         console.log(error);
//       });
//   })
// };
