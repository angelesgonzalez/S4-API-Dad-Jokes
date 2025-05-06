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
exports.createJoke = void 0;
const Joke_1 = require("./Joke");
const reportJokes_1 = require("./reportJokes");
const api_1 = require("./api");
let createJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    let joke = yield (0, api_1.getJoke)();
    if (joke) {
        const newJoke = new Joke_1.Joke(joke);
        reportJokes_1.reportJokes.push(newJoke);
        console.log(reportJokes_1.reportJokes);
    }
});
exports.createJoke = createJoke;
//# sourceMappingURL=createJokes.js.map