const express = require('express');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/style', (req, res) => {
    res.setHeader("Content-Type", "text/css");
    res.send("@font-face {  font-family: 'SAP Fiori Icons';  src:    url('https://vipulstorageacc.z13.web.core.windows.net/SAP-icons.ttf') format('truetype');  font-weight: normal;  font-style: normal;}")
});

app.get('/', (req, res) => {
    res.send("The home page")
});



const port = process.env.port || 8080;

app.listen(port, () => {
    console.log('Wasssupp');
});
