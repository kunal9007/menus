"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const httpContext = require("express-http-context");
const helmet_1 = require("helmet");
const config_1 = require("@nestjs/config");
const setContext_1 = require("./common/middleware/setContext");
const logger_service_1 = require("./common/logger/logger.service");
function formatErroText(appName, err) {
    var _a;
    let errorText = `[${appName}] Uncaught Exception: `;
    if (err && (err === null || err === void 0 ? void 0 : err.response) && ((_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data)) {
        errorText += JSON.stringify(err.response.data);
    }
    else {
        errorText += (err === null || err === void 0 ? void 0 : err.message) + (err === null || err === void 0 ? void 0 : err.stack);
    }
    return errorText;
}
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        snapshot: true,
    });
    const config = app.get(config_1.ConfigService);
    const appName = config.get('appName');
    app.enableCors();
    app.use((0, helmet_1.default)({ contentSecurityPolicy: process.env.NODE_ENV !== 'development' }));
    app.use(httpContext.middleware);
    app.use((0, setContext_1.setContext)(appName));
    const logger = app.get(logger_service_1.LoggerService);
    process.on('unhandledRejection', (err) => {
        const errorText = formatErroText(appName, err);
        logger.error(errorText);
    });
    process.on('uncaughtException', (err) => {
        const errorText = formatErroText(appName, err);
        logger.error(errorText);
    });
    await app.listen(3008);
    logger.info(`App listening on port 3008`);
}
bootstrap();
//# sourceMappingURL=main.js.map