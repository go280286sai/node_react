const nodemailer = require('nodemailer');
const config = require("config");
class Mail
{
    constructor(to_email, subject, text_body) {
        this.to_email = to_email;
        this.text_subject = subject
        this.text_body = text_body;
        this.createMail();
    }
createMail(){
 return this.transporter = nodemailer.createTransport({
        host: config.get('mail_host'),
        port: config.get('mail_port'),
        auth: {
            user: config.get('mail_user'),
            pass: config.get('mail_pass')
        }
    });
}
sendMail(){
   return this.transporter.sendMail({
        from: config.get('email'),
        to: this.to_email,
        subject: this.text_subject,
        text: this.text_body
    }, function(err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}


}
module.exports = Mail;