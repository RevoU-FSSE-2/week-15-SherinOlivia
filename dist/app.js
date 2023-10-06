"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const router_1 = require("./router");
const cors_1 = __importDefault(require("cors"));
const escape_html_1 = __importDefault(require("escape-html"));
const mongoMiddleware_1 = __importDefault(require("./middleware/mongoMiddleware"));
const requestMiddleware_1 = __importDefault(require("./middleware/requestMiddleware"));
// import helmetConfig from './middleware/helmetMiddleware';
// import morganConfig from './middleware/morganMiddleware';
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
// middlewares
app.use(express_1.default.json());
app.use(mongoMiddleware_1.default);
app.use(requestMiddleware_1.default);
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)('combined'));
// cors config:
const GlobalcorsOptions = {
    origin: ['https://w15fe.roozone.site', 'https://w15sh-fe.netlify.app', 'http://localhost:5173'],
};
const ClientXoptions = {
    origin: ['https://w15sh-fe.netlify.app', 'http://localhost:5173'],
    methods: ['GET', 'POST'],
};
const ClientYoptions = {
    origin: ['https://w15fe.roozone.site', 'http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
};
// app.use(cors(GlobalcorsOptions));
// router
app.use(router_1.router);
app.use('/client-x', (0, cors_1.default)(ClientXoptions), router_1.routerX);
app.use('/client-y', (0, cors_1.default)(ClientYoptions), router_1.routerY);
// xss?
app.get('/', (req, res) => {
    const htmlScript = '<script>alert("Caed mil");</script>';
    const escapeHtmlUse = (0, escape_html_1.default)(htmlScript);
    res.send(`<div>${escapeHtmlUse}</div>`);
    console.log(escapeHtmlUse);
});
app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});
