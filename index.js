require('dotenv').config();
const http = require('http');


const browse = require('./browse').browse;

const minute = 1000 * 60;
let numberOfReq = 0;

setInterval(() => {
  browse();
  numberOfReq++;
}, minute)

http.createServer((req, res) => {
  res.setHeader('Content-type', 'text/html');
  res.write('<html><head>');
  res.write('<title>Matan Automation</title>');
  res.write('<meta name="viewport" content="width=device-width, initial-scale=1.0" />');
  res.write('</head>');
  res.write('<body style="display: flex; justift-content: center; align-items: center; text-align: center; font-family: Arial, Helvetica, sans-serif;">');
  res.write('<div style="width: 100%"><h1>Everything is working just fine!</h1>')
  res.write('<h3>The automation server is running</h3>')
  res.write('<p>The number of action on the server is ' + numberOfReq + '</p></div>');
  res.write('</body></html>')
  res.end();
})
.listen(process.env.PORT || 5050);