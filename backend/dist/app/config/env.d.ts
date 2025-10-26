type EnvType = {
    PORT: string;
    DB_URI: string;
    EMAIL: {
        SMTP_HOST: string;
        SMTP_PORT: string;
        SMTP_USERNAME: string;
        SMTP_PASS: string;
    };
    PAYMENT: {
        PAYMENT_BACKEND_SUCCESS_URL: string;
        PAYMENT_BACKEND_FAIL_URL: string;
        PAYMENT_BACKEND_CANCEL_URL: string;
    };
};
export declare const envVars: EnvType;
export {};
//# sourceMappingURL=env.d.ts.map