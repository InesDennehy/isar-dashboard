const express = require('express');
const app = express();
app.use(express.static('frontend'));
const PORT = process.env.PORT || 8001;


app.get('/', (request, response) => {    
    // display info
    response.sendFile(__dirname + '/frontend/index.html');
});

app.listen(PORT, () => {
    console.log(`Assignment B running on port ${PORT}`);
});