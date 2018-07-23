const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const request = require("request");
const parseJSON = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({
 extended: true
});
const app = require('../app')
const url = '';
let waitingData;

router.get('/', function(req, response) {

 var jsonData = undefined;

 waitingData = new Promise((resolve, reject) => {
  request(url, (err, res, body, next) => {

   jsonData = JSON.parse(body);

   if (err || res.statusCode != 200) {
    reject(err);
   } else {
    resolve(jsonData);
    response.render('index.ejs', {
     result: jsonData
    });
   }
  });
 });
});

module.exports = router;

// function getPromise() {
//  var jsonData = undefined;
//
//  waitingData = new Promise((resolve, reject) => {
//   request(url, (err, res, body, next) => {
//
//    jsonData = JSON.parse(body);
//
//    if (err || res.statusCode != 200) {
//     reject(err);
//    } else {
//     resolve(jsonData);
//     response.render('index.ejs', {
//      result: jsonData
//     });
//    }
//   });
//  });
//
//  return waitingData;
// }
//
// module.exports = {
//  getPromise: getPromise
// }