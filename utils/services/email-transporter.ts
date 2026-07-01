import { Resend } from "resend";

export interface MailerConfig {
  apiKey: string;
  defaultFromAddress: string;
}

export class EmailTransporter {
  private resend: Resend;
  private readonly DEFAULT_FROM = "Apex49 Digital Limited <info@apex49.co>";
  private readonly fromAddress: string;

  constructor(config: MailerConfig) {
    this.resend = new Resend(config.apiKey);
    this.fromAddress = config.defaultFromAddress || this.DEFAULT_FROM;
  }

  async sendEmail(
    recipients: string[],
    subject: string,
    htmlContent: string,
  ): Promise<void> {
    try {
      const sendPromises = recipients.map((recipient) =>
        this.resend.emails.send({
          from: this.fromAddress,
          to: recipient,
          subject,
          html: htmlContent,
        }),
      );

      const results = await Promise.all(sendPromises);

      // Resend returns { data, error } per call rather than throwing —
      // check for per-recipient errors so a partial failure isn't silently swallowed.
      const failures = results.filter((r) => r.error);
      if (failures.length > 0) {
        throw new Error(
          `Resend rejected ${failures.length}/${recipients.length} email(s): ` +
          failures.map((f) => f.error?.message).join("; ")
        );
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      throw new Error("Email delivery failed");
    }
  }

  async verifyConnection(): Promise<boolean> {
    // Resend has no SMTP-style "verify" handshake — the closest equivalent
    // is confirming the API key is valid by hitting a lightweight authenticated endpoint.
    try {
      const { error } = await this.resend.domains.list();
      return !error;
    } catch (error) {
      console.error("Resend API key verification failed:", error);
      return false;
    }
  }
}