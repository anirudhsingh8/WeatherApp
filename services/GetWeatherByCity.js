import ApiClient from "../api_client/ApiClient";
import WeatherModel from "../models/WeatherModel";
import { APIKEY } from '@env';

const GetWeatherByCity = async ({ city }) => {
    const res = await ApiClient.get(`?q=${city}&appid=${APIKEY}`);

    return new WeatherModel(res.data);
};

export default GetWeatherByCity;