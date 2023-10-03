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
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
require("dotenv/config");
const uri = "mongodb+srv://Sherin:4wxVNRuop2VBoLjL@cluster1.a1xaobt.mongodb.net/";
const mongoMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mongoClient = yield new mongodb_1.MongoClient(uri).connect();
        const db = mongoClient.db('week15-cors-learning');
        req.db = db;
        if (db) {
            console.log("MongoDB Connection Succeed..!");
            next();
        }
        else {
            console.log("MongoDB Connection Failed...");
        }
    }
    catch (error) {
        console.log("MongoDB Connection Failed..");
    }
});
exports.default = mongoMiddleware;
