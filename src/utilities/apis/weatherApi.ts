import { ApiError } from "../Error";
import { errors } from "../errorLog";

export let getWeather = async (lat: number, lo: number, timezone: string) => {
	let url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lo}&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,wind_speed_10m_max,uv_index_max&current=temperature_2m,precipitation,rain,apparent_temperature,is_day,wind_speed_10m,weather_code&timezone=${timezone}&forecast_days=1&timeformat=unixtime`;

	try {
		let response = await fetch(url);

		if (!response.ok) {
			throw new ApiError(
				"Failed to fetch weather info",
				"FETCH_ERROR",
				response.status
			);
		}

		let data = await response.json();

		let currentWeahter = {
			temperature: data.current.temperature_2m,
			rain: data.current.rain,
			feelsLike: data.current.apparent_temperature,
			isDay: data.current.is_day,
			windSpeed: data.current.wind_speed_10m,
			weatherCode: data.current.weather_code,
		};

		return currentWeahter;
	} catch (error) {
		if (error instanceof ApiError) {
			errors.push(error);
		} else {
			console.error(error);
		}
	}
};
