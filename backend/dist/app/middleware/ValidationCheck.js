export const validationCheck = (scheme) => {
    return async (req, res, next) => {
        try {
            await scheme.parseAsync(req.body);
            next();
        }
        catch (error) {
            const newArr = JSON.parse(error).map((errorItem) => {
                return {
                    path: errorItem.path[0],
                    message: errorItem.message
                };
            });
            console.error(newArr);
            next({
                type: "ZodError",
                error: newArr
            });
        }
    };
};
//# sourceMappingURL=ValidationCheck.js.map