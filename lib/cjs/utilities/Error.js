"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
class ApiError extends Error {
    constructor(message, type = "API_ERROR", status) {
        super(message);
        this.name = "Api Error";
        this.type = type;
        this.status = status;
        this.time = new Date().toISOString();
    }
}
exports.ApiError = ApiError;
//# sourceMappingURL=Error.js.map