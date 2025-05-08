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
exports.getWeather = void 0;
const Error_1 = require("../Error");
const errorLog_1 = require("../errorLog");
let getWeather = (lat, lo, timezone) => __awaiter(void 0, void 0, void 0, function* () {
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lo}&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,wind_speed_10m_max,uv_index_max&current=temperature_2m,precipitation,rain,apparent_temperature,is_day,wind_speed_10m,weather_code&timezone=${timezone}&forecast_days=1&timeformat=unixtime`;
    console.log(url);
    try {
        let response = yield fetch(url);
        if (!response.ok) {
            throw new Error_1.ApiError("Failed to fetch weather info", "FETCH_ERROR", response.status);
        }
        let data = yield response.json();
        let currentWeahter = {
            temperature: data.current.temperature_2m,
            rain: data.current.rain,
            feelsLike: data.current.apparent_temperature,
            isDay: data.current.is_day,
            windSpeed: data.current.wind_speed_10m,
            weatherCode: data.current.weather_code,
        };
        console.log(currentWeahter);
        return currentWeahter;
    }
    catch (error) {
        if (error instanceof Error_1.ApiError) {
            errorLog_1.errors.push(error);
        }
        else {
            console.error(error);
        }
    }
});
exports.getWeather = getWeather;
//# sourceMappingURL=weatherApi.js.map