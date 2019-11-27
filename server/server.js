const express = require('express');
const cors = require('cors');
const axios = require('axios')

const app = express();

const port = 3001;

app.use(cors());


app.get('/crypto', (req,res) => {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then(({data}) => {
       res.send(data)
    })
});

app.get('/compare',(req,res) => {
    axios.get('https://api.alternative.me/v1/ticker/?limit=10')
    .then(({data}) => {
        res.send(data)
    })
})

app.listen(port,(err) => {
    if(err){
        console.error(err)
    } else {
        console.log(`listneing on port ${port} `)
    }
});