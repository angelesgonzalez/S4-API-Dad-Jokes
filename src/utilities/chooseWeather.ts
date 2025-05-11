const mapWeatherCodeToCategory = (code: number): string => {
    if (code === 0) return "clear";
    if ([1, 2, 3].includes(code)) return "cloudy";
    if ([45, 48].includes(code)) return "fog";
    if ([51, 53, 55].includes(code)) return "drizzle";
    if ([56, 57].includes(code)) return "freezing-drizzle";
    if ([61, 63, 65].includes(code)) return "rain";
    if ([66, 67].includes(code)) return "freezing-rain";
    if ([71, 73, 75, 77].includes(code)) return "snow";
    if ([80, 81, 82, 85, 86].includes(code)) return "showers";
    if ([95, 96, 99].includes(code)) return "thunderstorm";
    return "default";
};


export let chooseWeatherBackground = (weatherCode: number, isDay: number) => {
	const body = document.getElementById("body");
	if (!body) return;

	const category = mapWeatherCodeToCategory(weatherCode);
	const videoName = `${isDay ? "day" : "night"}-${category}`;
	const videoUrl = `/backgrounds/${videoName}.webm`;

	const existingVideo = document.getElementById("bg-video");
	if (existingVideo) existingVideo.remove();

	body.insertAdjacentHTML(
		"beforeend",
		`
		<video autoplay muted loop id="bg-video" class="background-video">
			<source src="${videoUrl}" type="video/webm">
			Your browser does not support the video tag.
		</video>
	`
	);
};


