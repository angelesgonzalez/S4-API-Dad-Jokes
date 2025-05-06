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
exports.getJoke = getJoke;
const OPTIONS = {
    method: "GET",
    headers: {
        Accept: "application/json",
    },
};
const URLAPI = "https://icanhazdadjoke.com/";
function getJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield fetch(URLAPI, OPTIONS);
            if (response.status !== 200) {
                throw new Error(`There was an error: ${response.status}`);
            }
            let data = yield response.json();
            return data.joke;
        }
        catch (error) {
            console.log(error);
        }
    });
}
//# sourceMappingURL=api.js.map