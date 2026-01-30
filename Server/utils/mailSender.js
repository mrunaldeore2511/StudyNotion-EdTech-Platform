const nodemailer = require("nodemailer");
const mailSender = async(email, title, body) => {
    try{

        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 587, 
            secure: false, 
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        //sending the mail
        const info = await transporter.sendMail({
            from: `StudyNotion - by Babbar <mrunalddeore@gmail.com>`,
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        });

        console.log(info);
        return info;
    }
    catch(err) {
        console.error(err);
        return;
    }
}

module.exports = mailSender;