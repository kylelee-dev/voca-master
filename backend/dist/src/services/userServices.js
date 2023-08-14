"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../models/User");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name, password } = req.body;
    if (yield User_1.User.findOne({ email })) {
        throw new Error("Email in use already.");
    }
    const user = yield User_1.User.create({
        email,
        name,
        password: yield hashPassword(password),
    });
    if (user) {
        res.status(200).json({
            _id: user.id,
            email: user.email,
            name: user.name,
            token: generateToken(user.id),
        });
    }
    else {
        throw new Error("Invalid user data");
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield User_1.User.findOne({ email });
    if (user && (yield bcrypt_1.default.compare(password, user.password))) {
        // success
        res.status(200).json({
            _id: user.id,
            email: user.email,
            name: user.name,
            token: generateToken(user.id),
        });
    }
    else {
        throw new Error("Invalid Credentials");
    }
});
exports.loginUser = loginUser;
const hashPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield bcrypt_1.default.genSalt(10);
    const hashedPassword = yield bcrypt_1.default.hash(password, salt);
    return hashedPassword;
});
process.env.JWT_SECRET;
const generateToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "2d",
    });
};
