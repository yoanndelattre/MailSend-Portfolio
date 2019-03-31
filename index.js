const nodemailer = require('nodemailer');
const express = require('express');
var cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 
}

app.use(cors(corsOptions))

app.post('/mail/send', function (req, res, next) {
    
    let mailOpts, smtpTrans;
    
    smtpTrans = nodemailer.createTransport({
      host: 'smtp.googlemail.com',
      port: 587,
      secure: true,
      auth: {
          user: 'portfolio.yoanndelattre@gmail.com',
          pass: 'f3Nk50n8f8qF',
      },
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

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
