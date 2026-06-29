import nodemailer from "nodemailer";

export interface MailerConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  defaultFromAddress: string;
}

export class EmailTransporter {
  private transporter: nodemailer.Transporter;
  private readonly DEFAULT_FROM = "Apex49 Digital Limited <info@apex49.co>";

  constructor(config: MailerConfig) {
    this.transporter = this.initializeTransporter(config);
  }

  private initializeTransporter(config: MailerConfig): nodemailer.Transporter {
    return nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: false,
      auth: {
        user: config.username,
        pass: config.password,
      },
      connectionTimeout: 5000,
      greetingTimeout: 5000,
      socketTimeout: 5000,
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  async sendEmail(
    recipients: string[],
    subject: string,
    htmlContent: string,
  ): Promise<void> {
    try {
      const emailPromises = recipients.map((recipient) =>
        this.transporter.sendMail({
          from: this.DEFAULT_FROM,
          to: recipient,
          subject,
          html: htmlContent,
        }),
      );

      await Promise.all(emailPromises);
    } catch (error) {
      console.error("Failed to send email:", error);
      throw new Error("Email delivery failed");
    }
  }

  async verifyConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      return true;
    } catch (error) {
      console.error("SMTP connection verification failed:", error);
      return false;
    }
  }
}
