"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./src/routes/userRoutes"));
const db_1 = __importDefault(require("./src/db/db"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const port = parseInt(process.env.PORT) || 8000;
app.get("/", (req, res) => {
    res.send("Voca Master!");
});
app.use("/user", userRoutes_1.default);
const dbConnection = (0, db_1.default)();
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
