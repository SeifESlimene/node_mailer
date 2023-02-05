const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "4277509d3d788796b37eb42422c33b25-b0ed5083-ce7c8790",
    domain: "sandbox8d87b784382142c4917c7b375120b5d0.mailgun.org",
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, subject, text, cb) => {
  const mailOptions = {
    sender: name,
    from: email,
    to: "s.slimene19@gmail.com",
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports = sendMail;