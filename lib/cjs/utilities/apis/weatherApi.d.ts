export declare let getWeather: (lat: number, lo: number, timezone: string) => Promise<{
    temperature: any;
    rain: any;
    feelsLike: any;
    isDay: any;
    windSpeed: any;
    weatherCode: any;
}>;
