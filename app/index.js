const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
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

        let mailOptions = {
            from: 'notify@portfolio.com',
            to: 'contact@yoanndelattre.com,yoanndelattre.bsmhxq@zapiermail.com',
            replyTo: `${req.body.email}`,
            subject: "New message from Portfolio Website",
            text: req.body.message,
            html: htmlEmail,
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }

            console.log('Success mail send')
        })
    })
})

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
