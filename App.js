import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import MainCard from "./src/Components/mainCard";
import React from "react";
import { PaperProvider } from "react-native-paper";

export default function App() {
  
  return (
    <PaperProvider>
      <SafeAreaView className="flex-1">
        <StatusBar style="dark" />
        <View className="flex-1 relative pt-3">
          <Image
            source={require("./src/Assets/bg.png")}
            className="w-full h-full absolute"
          />
          {/* <SearchBar city={city} setCity={setCity} /> */}
          <MainCard />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}
