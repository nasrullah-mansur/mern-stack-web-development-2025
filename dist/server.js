import app from "./app.js";
const port = 4000;
const bootstrap = function () {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
};
bootstrap();
//# sourceMappingURL=server.js.map