let getUserCoordinates = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            resolve({
                lat: position.coords.latitude,
                lon: position.coords.longitude,
            });
        }, (error) => {
            reject(new Error("Geolocation error: " + error.message));
        });
    });
};
//# sourceMappingURL=getUserData.js.map