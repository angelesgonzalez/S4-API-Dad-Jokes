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
const api_1 = require("./api");
let updateHTML = (id, update) => {
    const htmlElement = document.getElementById(id);
    if (htmlElement)
        htmlElement.innerHTML = update;
};
exports.updateHTML = updateHTML;
let showJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    let joke = yield (0, api_1.getJoke)();
    if (joke) {
        (0, exports.updateHTML)("joke-display__text", `${joke}`);
    }
});
exports.showJoke = showJoke;
exports.nextJokeButton = document.getElementById("joke-display__button");
//# sourceMappingURL=dom.js.map