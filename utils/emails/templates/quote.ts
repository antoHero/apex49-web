export class EmailTemplate {
  static get quote(): string {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">
            <style>
                body {
                    font-family: "Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                    line-height: 1.6;
                    background-color: #f8fafc;
                    color: #1e293b;
                    margin: 0;
                    padding: 0;
                    -webkit-font-smoothing: antialiased;
                }
                table { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
                td { vertical-align: top; }
                
                .email-wrapper { width: 100%; max-width: 600px; margin: 40px auto; padding: 0 20px; }
                .email-card { background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
                .email-header { background-color: #000000; padding: 32px; text-align: center; }
                .brand-name { color: #ffffff; font-size: 22px; font-weight: 700; letter-spacing: -0.5px; margin: 0; }
                .email-body { padding: 40px; }
                .email-footer { padding: 32px 40px; text-align: center; background-color: #f8fafc; border-top: 1px solid #e2e8f0; }
                .email-footer p { font-size: 13px; color: #64748b; margin: 0 0 8px 0; line-height: 1.5; }
                .email-footer a { color: #000000; text-decoration: underline; font-weight: 500; }
                
                @media only screen and (max-width: 600px) {
                    .email-wrapper { margin: 10px auto; padding: 0 10px; }
                    .email-body { padding: 24px; }
                }
            </style>
        </head>
        <body>
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <td align="center">
                        <div class="email-wrapper">
                            <table class="email-card" role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                <!-- Header Section -->
                                <tr>
                                    <td class="email-header">
                                        <div class="brand-name">Apex49 Digital</div>
                                    </td>
                                </tr>
                                <!-- Body Section -->
                                <tr>
                                    <td class="email-body" align="left">
                                        {{content}}
                                    </td>
                                </tr>
                                <!-- Footer Section -->
                                <tr>
                                    <td class="email-footer">
                                        <p>© ${new Date().getFullYear()} Apex49 Digital Limited. All rights reserved.</p>
                                        <p>RSQ015A, Mahuta New Extension 1, Kaduna, Nigeria</p>
                                        <p style="margin-top: 16px;">
                                            <a href="#">Privacy Policy</a> &nbsp;·&nbsp;
                                            <a href="#">Terms of Service</a> &nbsp;·&nbsp;
                                            <a href="{{unsubscribe_url}}">Unsubscribe</a>
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </td>
                </tr>
            </table>
        </body>
        </html>`;
  }

  static render(content: string, unsubscribeUrl: string): string {
    return this.quote
      .replace("{{content}}", content)
      .replace("{{unsubscribe_url}}", unsubscribeUrl);
  }
}
