"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoMiddleware_1 = __importDefault(require("./middleware/mongoMiddleware"));
require("dotenv/config");
const router_1 = require("./router");
const cors_1 = __importDefault(require("cors"));
// import helmet from 'helmet';
// import escapeHtml from 'escape-html';
// import morgan from 'morgan';
const requestMiddleware_1 = __importDefault(require("./middleware/requestMiddleware"));
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(mongoMiddleware_1.default);
app.use(requestMiddleware_1.default);
const GlobalcorsOptions = {
    origin: ['https://w15fe.roozone.site', 'https://w15sh-fe.netlify.app', 'http://localhost:5173', 'http://localhost:8000', 'http://localhost:5555'],
};
const ClientXoptions = {
    origin: ['https://w15fe.roozone.site', 'https://w15sh-fe.netlify.app', 'http://localhost:5173'],
    methods: ['GET', 'POST'],
};
const ClientYoptions = {
    origin: 'http://localhost:8000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
};
// CORS config
app.use('/client-x', (0, cors_1.default)(ClientXoptions));
app.use('/client-y', (0, cors_1.default)(ClientYoptions));
// router X & Y
app.use(router_1.router);
app.use('/client-x', router_1.routerX);
app.use('/client-y', router_1.routerY);
app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});
