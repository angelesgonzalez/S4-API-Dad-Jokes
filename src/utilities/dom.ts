import { createJoke } from "./createJokes";
import { fetchWeatherData } from "./apis/weatherApi";
import { getRandomMeme } from "./getRandomMeme";
import { chooseWeatherBackground } from "./chooseWeather";

export let updateHTML = (id: string, update: string, jokeId?: number) => {
	const htmlElement = document.getElementById(id);
	if (htmlElement) {
		htmlElement.innerHTML = update;
		htmlElement.dataset.id = jokeId !== undefined ? jokeId.toString() : "";
	}
};

export let showJoke = async () => {
	let newJoke = await createJoke();
	if (newJoke) {
		updateHTML("joke-display__text", `${newJoke.text}`, newJoke.id);
	}
	cleanScoring();
};

export const nextJokeButton = document.getElementById("joke-display__button");

export const radioButtons = document.querySelectorAll(".tab-score");

export const currentJoke = document.getElementById("joke-display__text");



export const cleanScoring = () => radioButtons.forEach((radio) => {
	(radio as HTMLInputElement).checked = false;
});

export let showWeather = async () => {
	const weather = await fetchWeatherData();
	updateHTML("weather__feels-like_p", `${weather.feelsLike}°`);
	updateHTML("weather__temperature_p", `${weather.temperature}°`);
	updateHTML("weather__rain_p", `${weather.rain}`);
	updateHTML("weather__wind-speed_p", `${weather.windSpeed}`);
	chooseWeatherBackground(weather.weatherCode, weather.isDay);
};

export let showRandomMeme = () => {
	const memeContainer = document.getElementById(
		"memeOftheDay"
	) as HTMLImageElement | null;
	const randomMemeUrl = getRandomMeme();
	if (memeContainer) {
		memeContainer.src = randomMemeUrl;
	}
};
