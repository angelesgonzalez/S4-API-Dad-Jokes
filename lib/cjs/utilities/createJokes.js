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
const dadJokeApi_1 = require("./apis/dadJokeApi");
const workJokeApi_1 = require("./apis/workJokeApi");
let createJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    const randomNumber = Math.random();
    let jokeType = randomNumber < 0.5 ? "Dad Joke" : "Work Joke";
    let joke = randomNumber < 0.5 ? yield (0, dadJokeApi_1.getDadJoke)() : yield (0, workJokeApi_1.getWorkJoke)();
    if (joke) {
        const newJoke = new Joke_1.Joke(joke);
        newJoke.type = jokeType;
        reportJokes_1.reportJokes.push(newJoke);
        console.log(reportJokes_1.reportJokes);
        return newJoke;
    }
});
exports.createJoke = createJoke;
//# sourceMappingURL=createJokes.js.map