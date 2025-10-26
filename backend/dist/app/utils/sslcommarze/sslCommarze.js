import axios from "axios";
import { envVars } from "../../config/env.js";
export const sslCommarze = async (cus_data) => {
    const paymentInit = {
        store_id: "advan68fcc690cb7b1",
        store_passwd: "advan68fcc690cb7b1@ssl",
        total_amount: 100,
        currency: "BDT",
        tran_id: "REF123",
        success_url: `${envVars.PAYMENT.PAYMENT_BACKEND_SUCCESS_URL}/?email=${cus_data.email}`,
        fail_url: envVars.PAYMENT.PAYMENT_BACKEND_FAIL_URL,
        cancel_url: envVars.PAYMENT.PAYMENT_BACKEND_CANCEL_URL,
        cus_name: cus_data.name,
        cus_email: cus_data.email,
        cus_add1: "Dhaka",
        cus_add2: "Dhaka",
        cus_city: "Dhaka",
        cus_state: "Dhaka",
        cus_postcode: "1000",
        cus_country: "Bangladesh",
        cus_phone: "01711111111",
        cus_fax: "01711111111",
        ship_name: "Customer Name",
        ship_add1: "Dhaka",
        ship_add2: "Dhaka",
        ship_city: "Dhaka",
        ship_state: "Dhaka",
        ship_postcode: "1000",
        ship_country: "Bangladesh",
        // multi_card_name: "mastercard,visacard,amexcard",
        value_a: "ref001_A",
        value_b: "ref002_B",
        value_c: "ref003_C",
        value_d: "ref004_D"
    };
    try {
        const res = await axios({
            method: "POST",
            url: "https://sandbox.sslcommerz.com/gwprocess/v3/api.php",
            data: paymentInit,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            }
        });
        return res.data;
    }
    catch (error) {
        console.log(error);
    }
};
//# sourceMappingURL=sslCommarze.js.map