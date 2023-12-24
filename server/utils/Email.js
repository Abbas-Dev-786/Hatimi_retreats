const nodemailer = require("nodemailer");

class Email {
  constructor(user, url = "") {
    this.user = user;
    this.to = user.email;
    this.from = `Hatimi Retreats <${process.env.EMAIL_FROM}>`;
    this.url = url;
    this.name = user.fullName;
  }

  newTransport() {
    const dev = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.NODEMAILER_USERNAME,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    const prod = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    return process.env.NODE_ENV === "prod" ? prod : dev;
  }

  async send(subject, text, html = "") {
    try {
      const mailOptions = {
        from: this.from,
        to: this.to,
        text: text,
        subject,
        html,
      };

      await this.newTransport().sendMail(mailOptions);
    } catch (err) {
      console.log(err);
      const error = new Error(
        "There was an error sending the email. Try again later!"
      );
      error.name = "EmailSendingError";

      this.user.emailVerifyToken = undefined;
      this.user.passwordResetToken = undefined;
      this.user.passwordResetExpires = undefined;
      await this.user.save({ validateBeforeSave: false });

      throw error;
    }
  }

  async sendNewBooking(court, startTime, endTime) {
    this.to = "abbasbhp787@gmail.com";
    const subject = `Hey There is a new Booking`;
    const text = `
    ${this.name} has made a request of ${court} from ${new Date(
      startTime
    ).toLocaleString()} to ${new Date(endTime).toLocaleString()}.
      `;
    const html = `<p>
    ${text}

    <br>

    <a href=${this.url}><button>Please Review the request</button></a>
    </p>`;

    await this.send(subject, text, html);
  }

  async sendNewBooking(court, startTime, endTime, status) {
    const subject = `Hey your booking has been ${status}`;
    const text = `
    ${this.name} you have made a request of ${court} from ${new Date(
      startTime
    ).toLocaleString()} to ${new Date(endTime).toLocaleString()}.
      has been ${status}`;
    const html = `<p>
    ${text}

    <br>

    <a href=${this.url}><button>View your booking</button></a>
    </p>`;

    await this.send(subject, text, html);
  }
}

module.exports = Email;
