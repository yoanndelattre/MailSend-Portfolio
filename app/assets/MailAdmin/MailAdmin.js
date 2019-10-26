const nodemailer = require('nodemailer')

module.exports.SendMailAdmin = function (req, res) { 
    nodemailer.createTestAccount((err, account) => {
        const htmlEmailAdmin = `
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
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        })

        let mailOptionsAdmin = {
            from: 'notify@portfolio.com',
            to: 'contact@yoanndelattre.com',
            subject: "New message from Portfolio Website",
            text: req.body.message,
            html: htmlEmailAdmin,
        }

        transporter.sendMail(mailOptionsAdmin, (err, info) => {
            if (err) {
                return console.log(err)
            }
            else {
                console.log('Success mail send Admin')
            }
        })
    })
};