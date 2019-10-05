const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "https://yoanndelattre.com");
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.post('/mail/send', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>Contact: </h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
                <li>Language: ${req.body.languageUser}</li>
            </ul>
            <br></br>
            <h3>Message: </h3>
            <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'portfolio.yoanndelattre@gmail.com',
                pass: 'CnBeCR6rw8wR'
            }
        })

        let mailOptionsFr = {
            from: 'notify@portfolio.com',
            to: 'contact@yoanndelattre.com,yoanndelattre.bsmhxq@zapiermail.com',
            replyTo: `${req.body.email}`,
            subject: "New message from Portfolio Website",
            text: req.body.message,
            html: htmlEmail,
        }

        let mailOptionsUS = {
            from: 'notify@portfolio.com',
            to: 'contact@yoanndelattre.com,englishyoanndelattre.bsmhxq@zapiermail.com',
            replyTo: `${req.body.email}`,
            subject: "New message from Portfolio Website",
            text: req.body.message,
            html: htmlEmail,
        }

        if (req.body.languageUser === 'FR') {
            transporter.sendMail(mailOptionsFr, (err, info) => {
                if (err) {
                    return console.log(err)
                }
                console.log('Success mail send FR')
            })
        }

        if (req.body.languageUser === 'US') {
            transporter.sendMail(mailOptionsUS, (err, info) => {
                if (err) {
                    return console.log(err)
                }
                console.log('Success mail send US')
            })
        }
    })
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