import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
export default function WeekData({ nextdata }) {
  return (
    <View className="mt-5">
        <Text className='text-2xl text-center text-slate-800 font-bold underline  my-4'>Next 7 Days Weather Forecast</Text>
      <ScrollView className="gap-4 mx-1" horizontal>
        {nextdata !== undefined &&
          nextdata &&
          nextdata.daily.map((item, index) => {
            return (
              <View
                key={index}
                className="bg-slate-300 min-w-[120px] h-[130px] rounded-2xl flex items-center"
              >
                <Image
                  className="w-[80px] h-[80px]"
                  source={{
                    uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`,
                  }}
                />
                <View className="flex-row">
                  <Text className="text-xl font-bold capitalize text-slate-800 ">
                    {item.temp.day.toFixed(0)}
                  </Text>
                  <Text className="font-bold">&deg;C</Text>
                </View>
                <Text>{item.weather[0].description}</Text>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
}
