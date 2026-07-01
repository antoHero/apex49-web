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
	apiKey: process.env.NEXT_PUBLIC_RESEND_KEY || "",
	defaultFromAddress: process.env.NEXT_FROM_EMAIL_ADDRESS!,
});

export default emailService;
