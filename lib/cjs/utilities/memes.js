"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomMeme = void 0;
let getRandomMeme = () => {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let imageSrc = `src/assets/memes/meme-${randomNumber}.gif`;
    return imageSrc;
};
exports.getRandomMeme = getRandomMeme;
//# sourceMappingURL=memes.js.map