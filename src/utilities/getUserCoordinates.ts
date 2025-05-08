export async function getUserCoordinates(): Promise<{
	lat: number;
	lon: number;
}> {
	try {
		const position = await new Promise<GeolocationPosition>(
			(resolve, reject) => {
				navigator.geolocation.getCurrentPosition(resolve, reject);
			}
		);

		return {
			lat: position.coords.latitude,
			lon: position.coords.longitude,
		};
	} catch (error) {
		throw new Error("Failed to get user location");
	}
}
