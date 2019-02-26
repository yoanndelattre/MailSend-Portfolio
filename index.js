const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
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
            service: 'gmail',
            auth: {
                user: 'portfolio.yoanndelattre@gmail.com',
                pass: 'f3Nk50n8f8qF'
            }
        })

        let mailOptions = {
            from: 'notify@portfolio.com',
            to: 'contact@yoanndelattre.com,yoanndelattre.bsmhxq@zapiermail.com', 
            subject: "New message from Portfolio Website",
            text: req.body.message,
            html: htmlEmail,
            attachments: [
                {
                    filename: 'NameContact.txt',
                    content: `${req.body.name}`
                },
                {
                    filename: 'EmailContact.txt',
                    content: `${req.body.email}`
                }
            ]
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }

            console.log('Success mail send')
        })
    })
})

const port = process.env.PORT || 80

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
