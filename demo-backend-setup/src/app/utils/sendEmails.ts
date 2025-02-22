import nodemailer from 'nodemailer';

const transPorter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'dulonmolla77@gmail.com',
    pass: 'host_password'
  }
});

const sendEmail = async (to: string, subject: string, text: string) => {
  await transPorter.sendMail({
    from: 'dulonmolla77@gmail.com',
    to,
    subject,
    text
  });
};

export default sendEmail;

// hint
// sendEmail('client_email', 'email_subject', 'email_body');
