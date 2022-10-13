const PORT = 8000
const axios = require("axios")
const express= require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
app.use(cors())

app.get('/flights', (req, res) => {


const options = {
    method: 'GET',
    url: 'https://toronto-pearson-airport.p.rapidapi.com/departures',
    headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'toronto-pearson-airport.p.rapidapi.com'
    }
};

axios(options).then(function (response) {
	// console.log(response.data)
    response.data.forEach( (item) => {
        console.log(response.data)
        // console.log('data',item.status, item.destination, item.airline, item.departing, item.gate)
    })
    res.json(response.data.slice(0,10))
}).catch(function (error) {
	console.error(error)
});
})

app.listen(PORT, () => console.log('running on PORT ' + PORT))