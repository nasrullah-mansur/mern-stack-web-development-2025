import dotenv from "dotenv";
dotenv.config();
const envVarsFn = () => {
    const requiredEnvVariables = [
        "PORT",
        "DB_URI",
        "SMTP_HOST",
        "SMTP_PORT",
        "SMTP_USERNAME",
        "SMTP_PASS",
    ];
    requiredEnvVariables.forEach((key) => {
        if (!process.env[key]) {
            throw new Error(`Missing required environment variable ${key}`);
        }
    });
    return {
        PORT: process.env.PORT,
        DB_URI: process.env.DB_URI,
        EMAIL: {
            SMTP_HOST: process.env.SMTP_HOST,
            SMTP_PORT: process.env.SMTP_PORT,
            SMTP_USERNAME: process.env.SMTP_USERNAME,
            SMTP_PASS: process.env.SMTP_PASS,
        }
    };
};
export const envVars = envVarsFn();
//# sourceMappingURL=env.js.map