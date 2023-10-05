"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routerX = express_1.default.Router();
routerX.options('/client-X', (req, res) => {
    res.header('Access-Control-Allow-Methods', 'GET, POST');
});
routerX.get('/client-X', (req, res) => {
    res.json({ message: "Hello! This is SH's Cors Enabled Route!" });
});
routerX.post('/client-X', (req, res) => {
    let body = req.body;
    res.json({ message: body });
});
exports.default = routerX;
