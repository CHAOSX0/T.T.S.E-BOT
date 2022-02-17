function shorten (link){
var promise = new Promise((resolve, reject) => {
var request = require('request');
var headers = {
    'Authorization': 'Bearer 0b66ec1a7d74d6dc8ba30f0c0b8a4f960ef4de71',
    'Content-Type': 'application/json'
};

var dataString = `{"long_url": "${link}"}`

var options = {
    url: 'https://api-ssl.bitly.com/v4/shorten',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
  const temp = JSON.parse(body.toString())
console.log(temp)
  resolve(temp)
    }else{
        if(error){
        reject(error)
        }
    }
        
}

request(options, callback);
})
return promise 
}
function getClicks(id){
var promise = new Promise((resolve, reject) => {
var request = require('request');

var headers = {
    'Authorization': 'Bearer 0b66ec1a7d74d6dc8ba30f0c0b8a4f960ef4de71'
};

var options = {
    url: `https://api-ssl.bitly.com/v4/bitlinks/${id}/clicks/summary`,
    headers: headers
};

function callback(error, response, body) {
 console.log(response.statusCode)
    if (!error && response.statusCode == 200) {
        resolve(JSON.parse(body.toString()))
    }
}

request(options, callback);
})
return promise
        }
module.exports = {shorten: shorten, getClicks: getClicks} 