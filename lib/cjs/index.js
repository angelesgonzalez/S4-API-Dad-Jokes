"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dom_1 = require("./utilities/dom");
const createJokes_1 = require("./utilities/createJokes");
const dom_2 = require("./utilities/dom");
document.addEventListener("DOMContentLoaded", (event) => {
    (0, dom_2.showJoke)();
});
dom_1.nextJokeButton.addEventListener("click", (event) => {
    const newJoke = (0, createJokes_1.createJoke)();
    if (newJoke) {
        (0, dom_1.updateHTML)("joke-display__text", `${newJoke}`);
    }
});
//# sourceMappingURL=index.js.map