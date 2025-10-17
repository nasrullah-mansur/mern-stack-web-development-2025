import dotenv from "dotenv";

dotenv.config();

type EnvType = {
    PORT: string;
    DB_URI: string;
    EMAIL: {
        SMTP_HOST: string;
        SMTP_PORT: string;
        SMTP_USERNAME: string;
        SMTP_PASS: string;
    }
}

const envVarsFn = (): EnvType => {
    const requiredEnvVariables: string[] = [
        "PORT",
        "DB_URI",
        "SMTP_HOST",
        "SMTP_PORT",
        "SMTP_USERNAME",
        "SMTP_PASS",
    ];

    requiredEnvVariables.forEach((key: string) => {
        if (!process.env[key]) {
            throw new Error(`Missing required environment variable ${key}`);
        }
    })

    return {
        PORT: process.env.PORT as string,
        DB_URI: process.env.DB_URI as string,
        EMAIL: {
            SMTP_HOST: process.env.SMTP_HOST as string,
            SMTP_PORT: process.env.SMTP_PORT as string,
            SMTP_USERNAME: process.env.SMTP_USERNAME as string,
            SMTP_PASS: process.env.SMTP_PASS as string,
        }
    };
}


export const envVars = envVarsFn();

