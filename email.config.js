const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

const message = {
    from: 'zoommatan@gmail.com', // Sender address
    to: 'mtnamos@gmail.com, office.darcopolo@gmail.com, yonatan941@gmail.com',         // List of recipients
    subject: '### There is a free queue available', // Subject line
    html: '<h2>HURRY UP</h2><p>https://secure.e-konsulat.gov.pl/Wizyty/Paszportowe/RejestracjaTerminuWizytyPaszportowej.aspx?IDPlacowki=150</p>' // Plain text body
};

module.exports = { transport, message };