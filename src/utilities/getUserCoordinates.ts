import { ApiError } from "./Error";
import { errors } from "./errorLog";

let getCurrentPosition = (
	options: PositionOptions = {}
): Promise<GeolocationPosition> => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject, options);
	});
};

export let getUserCoordinates = async (): Promise<{
	lat: number;
	lon: number;
}> => {
	try {
		let position = await getCurrentPosition();
		const { latitude: lat, longitude: lon } = position.coords;
		return { lat, lon };
	} catch (error) {
		const geolocationError = new ApiError(
			"Geolocation Error",
			error.message,
			error.code
		);

		errors.push(geolocationError);
		throw geolocationError;
	}
};

export let createCoordinates = async () => {
	try {
		const coords = await getUserCoordinates();
		let lat = coords.lat ? coords.lat : 52.52;
		let lon = coords.lon ? coords.lon : 13.419;
		return { lat, lon };
	} catch (error) {
		
		return { lat: 52.52, lon: 13.419 };
	}
};
