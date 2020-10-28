const accountSid = 'AC0a200732e0a134c2c9e3987a420cc9bc'; 
const authToken = '72052045cfdaf02bd19689f1bf21e9c1'; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: 'Hey Matan. Im just creating tests', 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+972506783384' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
