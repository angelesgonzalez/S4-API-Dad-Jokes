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
const api_1 = require("./services/api");
let updateHTML = (id, update) => {
    const htmlElement = document.getElementById(id);
    if (htmlElement)
        htmlElement.innerHTML = update;
};
// let jokeDisplayText = document.getElementById("joke-display__text");
let showJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    let joke = yield (0, api_1.getJoke)();
    if (joke) {
        updateHTML("joke-display__text", `${joke}`);
    }
});
document.addEventListener("DOMContentLoaded", (event) => {
    showJoke();
});
//# sourceMappingURL=index.js.map