import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image,
} from "react-native";
import React, { useState } from "react";

export default function SearchBar({city,setCity}) {
  // const [city, setCity] = useState("");
  const [formValue, setFormValue] = useState("");
  
  const handleSubmit = () => {
    setCity(formValue);
    setFormValue("");
    Keyboard.dismiss();
  }

  return (
    <View className="flex justify-between bg-gray-300 items-center mt-5 mx-4 rounded-xl z-20 h-12 flex-row px-3">
      <TextInput
        value={formValue}
        onChangeText={setFormValue}
        placeholder="Enter City Name"
        placeholderTextColor={"black"}
        className="  h-full rounded-xl"
      />
      <TouchableOpacity
        className="p-2 bg-gray-400 rounded-xl items-center justify-center"
        onPress={handleSubmit}
        disabled={!formValue}
      >
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/751/751381.png",
          }}
          className="w-5 h-5 z-50 pl-2"
        />
      </TouchableOpacity>
    </View>
  );
}
