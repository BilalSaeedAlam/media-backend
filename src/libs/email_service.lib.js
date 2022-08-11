const nodemailer = require("nodemailer");
const {
  DOMAIN_NAME,
  EMAIL_SERVER,
  EMAIL_PORT,
  NODEMAILER_USER,
  NODEMAILER_PASSWORD,
} = process.env;
exports.sendEmail = async (email) => {
  try {
    let transporter = nodemailer.createTransport({
      name: DOMAIN_NAME, // <= Add this
      host: EMAIL_SERVER,
      port: EMAIL_PORT,
      secure: true, // true for 465, false for other ports
      auth: {
        user: NODEMAILER_USER, // generated ethereal user
        pass: NODEMAILER_PASSWORD, // generated ethereal password
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });
    let mailOptions = {
      from: `"MEDIA CARRY. " <${NODEMAILER_USER}>`, // sender address
      to: email, // list of receivers
      subject: "MEDIA CARRY ✔", // Subject line
      text: "Hello", // plain text body
      html: "<b>Welcome to Media Carry.</b>", // html body
    };
    return await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};
