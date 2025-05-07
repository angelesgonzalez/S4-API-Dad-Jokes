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
exports.nextJokeButton = exports.showJoke = exports.updateHTML = void 0;
const createJokes_1 = require("./createJokes");
let updateHTML = (id, update) => {
    const htmlElement = document.getElementById(id);
    if (htmlElement)
        htmlElement.innerHTML = update;
};
exports.updateHTML = updateHTML;
let showJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    let newJoke = yield (0, createJokes_1.createJoke)();
    if (newJoke) {
        (0, exports.updateHTML)("joke-display__text", `${newJoke}`);
    }
});
exports.showJoke = showJoke;
/*

document.addEventListener("DOMContentLoaded", (event) => {
    const newJoke = createJoke();
    updateHTML("joke-display__text", `${newJoke}`);
});



*/
exports.nextJokeButton = document.getElementById("joke-display__button");
//# sourceMappingURL=dom.js.map