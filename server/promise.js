const bodyParser = require('body-parser');
const request = require("request");
const parseJSON = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({
 extended: true
});
const url = 'https://anytimecar.ru/api/3.5/?get=cars&key=5d90897eeb0855e9d9c395460846f6ad';
let waitingData;

function getPromise() {

 var jsonData = undefined;

 waitingData = new Promise((resolve, reject) => {
  request(url, (err, res, body, next) => {

   jsonData = JSON.parse(body);

   if (err || res.statusCode != 200) {
    reject(err);
   } else {
    resolve(jsonData);
   }
  });
 });

 return waitingData;
}

module.exports = {
 getPromise: getPromise
};