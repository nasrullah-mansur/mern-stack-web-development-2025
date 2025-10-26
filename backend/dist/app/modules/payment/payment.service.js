import { User } from "../user/user.model.js";
const success = async (email) => {
    const updateUser = await User.updateOne({
        email,
    }, {
        isPremium: true
    });
    return {
        status: "success",
        message: "Payment successfully added",
    };
};
export const PaymentService = {
    success
};
//# sourceMappingURL=payment.service.js.map