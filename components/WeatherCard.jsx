import { Text, View } from "react-native";
import fahToCel from "../utils/FahToCel";

const WeatherCard = ({weather}) => {
    return <View className="bg-slate-300 px-4 py-1 rounded-md">
        <Text className="my-2 font-medium">{`City: ${weather.city}`}</Text>
        <Text className="my-2 font-medium">{`City: ${fahToCel(weather.temprature).toFixed(2)}°C`}</Text>
    </View>;
}

export default WeatherCard;