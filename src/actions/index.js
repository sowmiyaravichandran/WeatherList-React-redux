import axois from 'axios';
const API_KEY = "f4b80fd696abd521f1e9d0530f8fa54c";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?`;
export const FETCH_WEATHER = "TYPE_WEATHER";
export function fetchWeather(city) {
const url = `${ROOT_URL}q=${city},us&appid=${API_KEY}`;
const request = axois.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}