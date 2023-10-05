"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerY = exports.routerX = exports.router = void 0;
var mainRouter_1 = require("./mainRouter");
Object.defineProperty(exports, "router", { enumerable: true, get: function () { return __importDefault(mainRouter_1).default; } });
var routerX_1 = require("./routerX");
Object.defineProperty(exports, "routerX", { enumerable: true, get: function () { return __importDefault(routerX_1).default; } });
var routerY_1 = require("./routerY");
Object.defineProperty(exports, "routerY", { enumerable: true, get: function () { return __importDefault(routerY_1).default; } });
