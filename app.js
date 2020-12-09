const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("The home page")
});

app.listen(3000, () => {
    console.log('Michael Scott in 2005: Whassup? \n Whatsapp executives: *thinking of what to name their company*')
});
