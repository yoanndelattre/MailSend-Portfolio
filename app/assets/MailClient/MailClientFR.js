const nodemailer = require('nodemailer')

module.exports.SendMailClientFR = function (req, res) { 
    nodemailer.createTestAccount((err, account) => {
        const htmlEmailClientFR = `
            <!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>  <title></title>  <!--[if !mso]><!-- -->  <meta http-equiv="X-UA-Compatible" content="IE=edge">  <!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style type="text/css">  #outlook a { padding: 0; }  .ReadMsgBody { width: 100%; }  .ExternalClass { width: 100%; }  .ExternalClass * { line-height:100%; }  body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }  table, td { border-collapse:collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }  p { display: block; margin: 13px 0; }</style><!--[if !mso]><!--><style type="text/css">  @media only screen and (max-width:480px) {    @-ms-viewport { width:320px; }    @viewport { width:320px; }  }</style><!--<![endif]--><!--[if mso]><xml>  <o:OfficeDocumentSettings>    <o:AllowPNG/>    <o:PixelsPerInch>96</o:PixelsPerInch>  </o:OfficeDocumentSettings></xml><![endif]--><!--[if lte mso 11]><style type="text/css">  .outlook-group-fix {    width:100% !important;  }</style><![endif]--><!--[if !mso]><!-->    <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css">    <style type="text/css">        @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);  @import url(https://fonts.googleapis.com/css?family=Cabin);    </style>  <!--<![endif]--><style type="text/css">  @media only screen and (min-width:480px) {    .mj-column-per-100 { width:100%!important; }  }</style></head><body style="background: #4D5C66;">    <div class="mj-container" style="background-color:#4D5C66;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><div style="margin:0px auto;max-width:600px;background:#425663;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#425663;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:0px 0px 0px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]--><div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top;" width="100%" border="0"><tbody><tr class="hide_on_mobile"><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:600px;"><img alt="work image" title="" height="auto" src="https://topolio.s3.eu-west-1.amazonaws.com/uploads/5c759b3a8bdbb/1551211747.jpg" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="600"></td></tr></tbody></table></td></tr><tr class="hide_on_mobile"><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><div style="cursor:auto;color:#000000;font-family:Arial, sans-serif;font-size:11px;line-height:1.5;text-align:center;"><p style="font-size: 22px; font-family: Cabin, sans-serif;"><span style="font-size:28px;"><span style="color:#dddddd;">Portfolio | Yoann Delattre</span></span></p></div></td></tr><tr class="hide_on_mobile"><td style="word-wrap:break-word;font-size:0px;padding:3px 3px 3px 3px;" align="center"><div style="cursor:auto;color:#AEAEAE;font-family:Cabin, sans-serif;font-size:22px;line-height:1.5;text-align:center;"><p style="font-size: 22px; font-family: Cabin, sans-serif;"><span style="color:#eeeeee;"><span style="font-size:28px;">Confirmation - Prise de contact</span></span></p><p style="font-size: 22px; font-family: Cabin, sans-serif;"><span style="color:#bbbbbb;"><span style="font-size:20px;">Votre message a&#xA0;bien &#xE9;t&#xE9;&#xA0;</span></span>transmis</p></div></td></tr><tr class="hide_on_mobile"><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;padding-top:10px;padding-bottom:10px;padding-right:38px;padding-left:38px;"><p style="font-family: Cabin, sans-serif; font-size: 1px; margin: 0px auto; border-top: 1px solid #000; width: 100%;"></p><!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #000;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]--></td></tr><tr class="hide_on_mobile"><td style="word-wrap:break-word;font-size:0px;padding:0px 13px 0px 39px;" align="left"><div style="cursor:auto;color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:1.5;text-align:left;"><p style="font-size: 22px; font-family: Cabin, sans-serif;"><span style="font-size:16px;"><strong>Votre Message :</strong></span></p><p style="font-size: 22px; font-family: Cabin, sans-serif;"><span style="font-size:16px;">${req.body.message}</span></p></div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;padding-top:10px;padding-bottom:10px;padding-right:38px;padding-left:38px;"><p style="font-family: Cabin, sans-serif; font-size: 1px; margin: 0px auto; border-top: 1px solid #000; width: 100%;"></p><!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #000;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]--></td></tr><tr class="hide_on_mobile"><td style="word-wrap:break-word;font-size:0px;padding:18px 18px 18px 18px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:separate;width:auto;" align="center" border="0"><tbody><tr><td style="border:0px solid #000;border-radius:24px;color:#fff;cursor:auto;padding:9px 26px;" align="center" valign="middle" bgcolor="#F85335"><a href="https://yoanndelattre.com" style="text-decoration: none; background: #F85335; color: #fff; font-family: Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif; font-size: 13px; font-weight: normal; line-height: 120%; text-transform: none; margin: 0px;" target="_blank">Portfolio | Yoann Delattre</a></td></tr></tbody></table></td></tr><tr class="hide_on_mobile"><td style="word-wrap:break-word;font-size:0px;padding:12px 12px 12px 12px;" align="center"><div><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="undefined"><tr><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:none;border-radius:3px;width:38px;" border="0"><tbody><tr><td style="vertical-align:middle;width:38px;height:38px;"><a href="https://twitter.com/yoanndelattre_"><img alt="twitter" height="38" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/twitter.png" style="display:block;border-radius:3px;" width="38"></a></td></tr></tbody></table></td></tr></tbody></table><!--[if mso | IE]>      </td><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:none;border-radius:3px;width:38px;" border="0"><tbody><tr><td style="vertical-align:middle;width:38px;height:38px;"><a href="https://www.linkedin.com/in/yoann-delattre"><img alt="linkedin" height="38" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/linkedin.png" style="display:block;border-radius:3px;" width="38"></a></td></tr></tbody></table></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]--></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></div></body></html>
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

        let mailOptionsClientFR = {
            from: 'contact@yoanndelattre.com',
            to: `${req.body.email}`,
            replyTo: 'contact@yoanndelattre.com',
            subject: "Confirmation - Prise de contact - Portfolio | Yoann Delattre",
            html: htmlEmailClientFR,
        }

        transporter.sendMail(mailOptionsClientFR, (err, info) => {
            if (err) {
                return console.log(err)
            }
            else {
                console.log('Success mail send Client FR')
            }
        })
    })
};