const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("The home page")
});

const port = process.env.port || 8080;

app.listen(port, () => {
    console.log('Michael Scott in 2005: Whassup? \n Whatsapp executives: *thinking of what to name their company*')
});
