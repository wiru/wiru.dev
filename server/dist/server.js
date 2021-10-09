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
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const rss_parser_1 = __importDefault(require("rss-parser"));
const cors_1 = __importDefault(require("cors"));
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.listen(port, () => console.log(`SERVER UP @ ${process.env.PORT}`));
const maxTitleLength = 50;
const maxContentLength = 80;
const parser = new rss_parser_1.default({});
const feedData = () => __awaiter(void 0, void 0, void 0, function* () {
    const feed = yield parser.parseURL('https://www.space.com/feeds/all');
    const result = [];
    let count = 0;
    for (let object in feed.items) {
        if (count < 12) {
            result.push(feed.items[object]);
            count++;
        }
        for (let object in result) {
            if (result[object].title.length > maxTitleLength) {
                result[object].title = `${result[object].title.substring(0, 50)}..`;
            }
            if (result[object].content.length > maxContentLength) {
                result[object].content = `${result[object].content.substring(0, 80)}..`;
            }
        }
        app.get('/rss', function (req, res) {
            res.send(result);
        });
    }
});
feedData();
