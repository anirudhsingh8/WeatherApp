import { Button, TextInput, View } from "react-native";

const CityInputComponent = ({ city, onChangeCity, onFetch }) => {
  return (
    <View className="flex-row items-center">
      <TextInput
        value={city}
        className="flex-1 p-4 mr-4 rounded-md bg-slate-300"
        placeholder="Enter city here"
        onChangeText={onChangeCity}
      />
      <Button title="Go" onPress={onFetch} />
    </View>
  );
};

export default CityInputComponent;
