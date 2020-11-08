require('dotenv').config();
const http = require('http');


const browse = require('./browse').browse;

const lastTime = new Date();
const minute = 1000 * 60;
let info = {
  starting: 0,
  goToSite: 0,
  typing: 0,
  error: 0,
  notExists: 0,
  finishTask: 0,
};

setInterval(() => {
  browse((key) => info[key]++);
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
  res.write('<p>The last time the server was initialized: ');
  res.write(`${lastTime.getDate()}/${lastTime.getMonth()}/${lastTime.getFullYear()} at `);
  res.write(`${lastTime.getHours()}:${lastTime.getMinutes()}</p>`);
  res.write('<ul>')
  res.write(`<li>Starting: ${info.starting}</li>`)
  res.write(`<li>Go to Site: ${info.goToSite}</li>`)
  res.write(`<li>Typing: ${info.typing}</li>`)
  res.write(`<li>Error: ${info.error}</li>`)
  res.write(`<li>Not exists: ${info.notExists}</li>`)
  res.write(`<li>Number of finished task: ${info.finishTask}</li>`)
  res.write('</ul>')
  res.write('</div></body></html>')
  res.end();
})
.listen(process.env.PORT || 5050);