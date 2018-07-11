const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const request = require("request");
const parseJSON = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({
    extended: true
});

let url = 'https://anytimecar.ru/api/3.5/?get=cars&key=5d90897eeb0855e9d9c395460846f6ad';

router.get('/', function(req, response) {

    function getJSON(jsonData) {
        jsonData = request(url, function (err, res, body, next) {
            if(!err && res.statusCode == 200) {
                let jsonArray = JSON.parse(body);
            }
        });

        return jsonData;
    }

    let result = getJSON();

    response.render('index.ejs', { result : result });
});


module.exports = router;