import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import WeatherScreen from "./screens/WeatherScreen";

export default function App() {
  return (
    <View className="flex-1 mx-8">
      <StatusBar style="auto" />
      <SafeAreaView />
      <WeatherScreen />
    </View>
  );
}
