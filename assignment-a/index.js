const express = require('express');
const https = require('https');
const app = express();
app.use(express.static('frontend'));
const PORT = process.env.PORT || 8000;

app.get('/', (request, response) => {    
    // display info
    response.sendFile(__dirname + '/frontend/index.html');
});

app.listen(PORT, () => {
    console.log(`Assignment A running on port ${PORT}`);
});