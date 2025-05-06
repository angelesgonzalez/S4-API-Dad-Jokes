"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dom_1 = require("./services/dom");
document.addEventListener("DOMContentLoaded", (event) => {
    (0, dom_1.showJoke)();
});
dom_1.nextJokeButton.addEventListener("click", (event) => {
    (0, dom_1.showJoke)();
});
//# sourceMappingURL=index.js.map