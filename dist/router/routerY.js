"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routerY = express_1.default.Router();
routerY.options('/', (req, res) => {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('X-Content-Type-Options', 'nosniff');
    res.sendStatus(200);
});
routerY.get('/', (req, res) => {
    res.json({ "message": "Hii, This is Collaborator's CORS-enabled route" });
});
routerY.post('/', (req, res) => {
    let body = req.body;
    res.json({ message: body });
});
exports.default = routerY;
