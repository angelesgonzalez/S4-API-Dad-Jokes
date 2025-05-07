"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dom_1 = require("./utilities/dom");
const scoreJokes_1 = require("./utilities/scoreJokes");
document.addEventListener("DOMContentLoaded", (event) => {
    (0, dom_1.showJoke)();
    (0, scoreJokes_1.scoreJoke)();
});
dom_1.nextJokeButton.addEventListener("click", (event) => {
    (0, dom_1.clearAllInput)();
    (0, dom_1.showJoke)();
});
//# sourceMappingURL=index.js.map