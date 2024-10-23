const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
        service: "gamil",
        auth:{
            user: "ajilalitha010@gmail.com",
            pass: "zdhc pagt datl hwnk",
        },

        tls: {
            rejectUnauthorized: false
        }
    });

const sendMailTouser = async(mailData) =>{
    await transporter.sendMail(mailData);
}

const mailSend = async (email, userName, password) =>{
    try {
        let mailOptions ={
            from: process.env.EMAIL_ID,
            to: email,
            subject: "Welcome to our Swiggy, let's order the favourite foods",
            text: `Hello ${userName}. This is your password: ${password}`,
        };

        await sendMailTouser(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.log(error);
    }
};

module.exports = mailSend;