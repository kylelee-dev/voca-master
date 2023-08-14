"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userServices_1 = require("../services/userServices");
const router = express_1.default.Router();
// POST user (signup)
router.post("/", userServices_1.registerUser);
// POST user/login
router.post("/login", userServices_1.loginUser);
exports.default = router;
