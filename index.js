require('dotenv').config();
const http = require('http');
const CronJob = require('cron').CronJob;

const browse = require('./browse').browse;

const automation = new CronJob('20 * * * * *', () => {
  browse();
});

automation.start();

http.createServer((req, res) => {
  res.setHeader('Content-type', 'text/html');
  res.write('<html><head>');
  res.write('<title>Matan Automation</title>');
  res.write('</head>');
  res.write('<body style="display: flex; justift-content: center; align-items: center; text-align: center; font-family: Arial, Helvetica, sans-serif;">');
  res.write('<div style="width: 100%"><h1>Everything is working just fine!</h1>')
  res.write('<h3>The automation server is running</h3></div>')
  res.write('</body></html>')
  res.end();
})
.listen(
  process.env.PORT,
  console.log('Server is Running')
)