const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

let port = 3036;
let app = express();

app.use(express.static( './client/dist/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(port, function() {
	console.log(`listening on port ${port}`);
});