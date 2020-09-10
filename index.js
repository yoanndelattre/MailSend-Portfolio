const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const MailAdmin = require('./assets/MailAdmin/MailAdmin');
const MailClientFR = require('./assets/MailClient/MailClientFR');
const MailCLientUS = require('./assets/MailClient/MailClientUS');

app.use(cors({
  origin: 'https://yoanndelattre.com',
  credentials: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/mail/send', (req, res) => {
  if (req.body.languageUser === 'FR') {
    MailClientFR.sendMailClientFR(req, res);
    MailAdmin.sendMailAdmin(req, res);
    res.sendStatus(200);
  }

  if (req.body.languageUser === 'US') {
    MailCLientUS.sendMailClientUS(req, res);
    MailAdmin.sendMailAdmin(req, res);
    res.sendStatus(200);
  }

  if (req.body.test === 'supertest_test') {
    res.sendStatus(200);
  }
});

app.get('/', (req, res) => {
  res.status(301).redirect('https://yoanndelattre.com');
});

app.get('/robots.txt', function(req, res) {
  res.sendFile(__dirname + '/assets/robots.txt');
});

const port = process.env.PORT || 8080;
const server = app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});

module.exports = server;
