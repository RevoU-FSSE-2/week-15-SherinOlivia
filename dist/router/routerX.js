"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routerX = express_1.default.Router();
routerX.options('/', (req, res) => {
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('X-Content-Type-Options', 'nosniff');
    res.sendStatus(200);
});
routerX.get('/', (req, res) => {
    res.json({ "message": "Hello! This is SH's Cors Enabled Route!" });
});
routerX.post('/', (req, res) => {
    let body = req.body;
    res.json({ message: body });
});
routerX.put('/', (req, res) => {
    let body = req.body;
    res.json({ message: body });
});
routerX.delete('/', (req, res) => {
    res.json({ "message": "Welp.. You don't really mean to delete me, now do you?" });
});
exports.default = routerX;
