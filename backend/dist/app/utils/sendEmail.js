import path from "path";
import ejs from "ejs";
import { fileURLToPath } from "url";
import { envVars } from "../config/env.js";
import nodemailer from "nodemailer";
export const sendEmail = async (emailInfo, templateData) => {
    // Email sending with Template;
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const templatePath = path.join(__dirname, "template", emailInfo.fileName);
    const html = await ejs.renderFile(templatePath, templateData);
    const transporter = nodemailer.createTransport({
        host: envVars.EMAIL.SMTP_HOST,
        port: envVars.EMAIL.SMTP_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user: envVars.EMAIL.SMTP_USERNAME,
            pass: envVars.EMAIL.SMTP_PASS,
        },
    });
    try {
        const info = await transporter.sendMail({
            from: `"Advance Blog" <${emailInfo.from}>`,
            to: emailInfo.to,
            subject: emailInfo.subject,
            html: html
        });
    }
    catch (error) {
        console.log(error);
    }
};
//# sourceMappingURL=sendEmail.js.map