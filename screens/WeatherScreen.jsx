import { useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import AppTitle from "../components/AppTitle";
import CityInputComponent from "../components/CityInputComponent";
import WeatherCard from "../components/WeatherCard";
import GetWeatherByCity from "../services/GetWeatherByCity";

const WeatherScreen = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);

  function handleTextChange(val) {
    setCity(val);
  }

  async function fetchWeather() {
    try {
      if (city === "") return;

      setLoading(true);
      setError(false);

      const res = await GetWeatherByCity({ city });
      setWeather(res);
    } catch (e) {
      setError(true);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <View className="flex-1">
        <AppTitle title={"Weatherly"} />
        <CityInputComponent
          city={city}
          onChangeCity={handleTextChange}
          onFetch={fetchWeather}
        />
        <View className="flex-1 my-8">
          <WeatherCore weather={weather} isError={error} isLoading={loading} />
        </View>
      </View>
    </>
  );
};

export default WeatherScreen;

const WeatherCore = ({ isLoading, isError, weather }) => {
  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isError) {
    return (
      <Text className="text-center">❌ Oops! something went wrong...</Text>
    );
  }

  if (weather === null) {
    return <Text className="text-center">Nothing to show here 🫨</Text>;
  }

  return <WeatherCard weather={weather}/>;
};
