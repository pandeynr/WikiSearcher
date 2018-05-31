const express = require('express');
const cors = require('cors');

let app = express();
    app.use(cors());
    app.use(express.static(__dirname + '/public'));

let server = app.listen(8000, ()=>{
    console.log('WikiPediaSearcher is running on Port 8000');
})