import app from "./app.js";
import { envVars } from "./app/config/env.js";
let server;
const bootstrap = async () => {
    server = app.listen(envVars.PORT, () => {
        console.log(`Example app listening on port ${envVars.PORT}`);
    });
};
bootstrap();
//# sourceMappingURL=server.js.map