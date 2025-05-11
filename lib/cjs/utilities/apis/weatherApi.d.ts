export declare let getWeather: (lat: number, lo: number, timezone: string) => Promise<{
    temperature: number;
    rain: number;
    feelsLike: number;
    isDay: any;
    windSpeed: number;
    weatherCode: any;
}>;
export declare const fetchWeatherData: () => Promise<{
    temperature: number;
    rain: number;
    feelsLike: number;
    isDay: any;
    windSpeed: number;
    weatherCode: any;
}>;
