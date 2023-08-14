"use strict";
// NotFound Handler
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.notFound = void 0;
const notFound = (req, res, next) => {
    const error = new Error(`Not Found: ${req.originalUrl}`);
    res.status(404);
    next(error);
};
exports.notFound = notFound;
// Error Handler
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.json({
        message: err === null || err === void 0 ? void 0 : err.message,
        stack: err.stack,
    });
};
exports.errorHandler = errorHandler;
