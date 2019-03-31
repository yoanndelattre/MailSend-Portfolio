const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


app.post('/mail/send', function (req, res) {
    
    let mailOpts, smtpTrans;
    
    smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'portfolio.yoanndelattre@gmail.com',
            pass: 'f3Nk50n8f8qF',
        }
    });

    const htmlEmail = `
        <h3>Contact: </h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <br></br>
        <h3>Message: </h3>
        <p>${req.body.message}</p>
    `
    
    mailOpts = {
        from: 'notify@portfolio.com',
        to: 'contact@yoanndelattre.com,yoanndelattre.bsmhxq@zapiermail.com',
        replyTo: `${req.body.email}`,
        subject: "New message from Portfolio Website",
        text: req.body.message,
        html: htmlEmail,
    };
    
    smtpTrans.sendMail(mailOpts, function (error, response) {
      
      if (error) {
        console.log(error)
      }
      
      else {
        console.log('success')
      }

    });

});