import { RequestQuoteHandler } from "../emails/handlers/request-quote";
import { EmailTransporter, MailerConfig } from "./email-transporter";

export class EmailService {
    private transporter: EmailTransporter;
    private quoteHandler: RequestQuoteHandler;

    constructor(config: MailerConfig) {
        this.transporter = new EmailTransporter(config)
        this.quoteHandler = new RequestQuoteHandler(this.transporter);
    }

    async sendConfirmationEmail(
        email: string,
        last_name: string,
        reference: string,
        service: string,
        createdAt: Date | string,
        currency: string,
        project_description: string,
        budget?: string | null,
    ): Promise<void> {
        return this.quoteHandler.sendConfirmationEmail(email, last_name, reference, service, createdAt, currency, project_description, budget);
    }
}

const emailService = new EmailService({
	host: process.env.NEXT_SMTP_HOST!,
	port: parseInt(process.env.NEXT_SMTP_PORT || '2525'),
	username: process.env.NETX_MAILTRAP_SMTP_USERNAME!,
	password: process.env.NEXT_MAILTRAP_SMTP_PASSWORD!,
	defaultFromAddress: process.env.NEXT_FROM_EMAIL_ADDRESS!,
});

export default emailService;
