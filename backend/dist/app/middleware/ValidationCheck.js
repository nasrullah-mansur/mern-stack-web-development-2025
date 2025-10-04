export const validationCheck = (scheme) => {
    return async (req, res, next) => {
        req.body = await scheme.parseAsync(req.body);
        next();
    };
};
//# sourceMappingURL=validationCheck.js.map