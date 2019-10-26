const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MailAdmin = require('./assets/MailAdmin/MailAdmin')
const MailClientFR = require('./assets/MailClient/MailClientFR')
const MailCLientUS = require('./assets/MailClient/MailClientUS')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "https://yoanndelattre.com");
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.post('/mail/send', (req, res) => {
    if (req.body.languageUser === 'FR') {
        MailClientFR.SendMailClientFR(req, res)
    }

    if (req.body.languageUser === 'US') {
        MailCLientUS.SendMailClientUS(req, res)
    }

    MailAdmin.SendMailAdmin(req, res)
})

app.get("/", (req, res) => {
    res.status(301).redirect("https://yoanndelattre.com")
})

app.get('/robots.txt', function(req, res) {
    res.sendFile(__dirname + '/robots.txt');
})

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})