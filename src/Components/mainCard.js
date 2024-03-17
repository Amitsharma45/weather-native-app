import React, { useState, useEffect } from "react";
import { View, Text, Image, Alert } from "react-native";
import axios from "axios";
import SearchBar from "./search";
import WeekData from "./weekData";
export default function MainCard() {
  const [data, setdata] = useState(undefined);
  const [city, setCity] = useState("");
  const [nextdata, setnextdata] = useState(undefined);
  var d = new Date();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  async function getweather(findtemp) {
    // e.preventDefault();
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${findtemp}&units=metric&appid=608fc6e2323f6ea6e8970619c1026e8d`
      );
      //   console.log("api data", { data });
      setdata(data);
    } catch {
      console.log("error while getting daata from api");
      Alert.alert("Error", "Please enter a valid city name");
    }
  }
  useEffect(() => {
    if (city) {
      getweather(city);
    } else {
      getweather("aligarh");
    }
  }, [city]);
  useEffect(() => {
    async function getNext7DaysData() {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=metric&appid=608fc6e2323f6ea6e8970619c1026e8d`)
        setnextdata(res.data);
  
    }
    if (data !== undefined) {
      getNext7DaysData();
    }
}, [data])

  return (
    <>
      <SearchBar city={city} setCity={setCity} />
      <View className="mt-10">
        {data && (
          <View className="flex gap-2justify-center items-center ">
            <View className="flex-row">
              <Text className="text-6xl font-bold capitalize text-slate-800 ">
                {data.main.temp.toFixed(0)}
              </Text>
              <Text className="text-xl font-bold">&deg;C</Text>
            </View>
            <Image
              source={{
                uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
              }}
              className="w-[150px] h-[150px]"
            />
            <View className="flex justify-center items-center">
              <Text className="text-3xl font-bold capitalize text-slate-800">
                {data.weather[0].description}{" "}
              </Text>
              <Text className="text-2xl font-bold capitalize text-slate-800">
                {data.name} , {data.sys.country}{" "}
              </Text>
              <Text className="text-xl font-bold capitalize text-slate-800">
                {days[d.getDay()]} , {d.getDate()} {months[d.getMonth()]}{" "}
              </Text>
            </View>
            <Text className="text-xl font-bold capitalize text-slate-800 mt-2">
              Temp. Details
            </Text>
            <View className="flex-row gap-4 justify-center items-center mt-2 flex-wrap">
              <Text className="text-2xl font-bold capitalize text-slate-800">
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/578/578135.png",
                  }}
                  className="w-[30px] h-[30px]"
                />
                {"  "}
                {data.main.humidity} %
              </Text>
              <Text className="text-2xl font-bold capitalize text-slate-800 lowercase">
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/3050/3050874.png",
                  }}
                  className="w-[30px] h-[30px]"
                />
                {"  "}
                {data.wind.speed} m/s
              </Text>
              <Text className="text-2xl font-bold capitalize text-slate-800 lowercase">
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/1809/1809544.png",
                  }}
                  className="w-[30px] h-[30px]"
                />
                {"  "}
                {data.main.pressure} hPa
              </Text>
            </View>
          </View>
        )}
      </View>
      <WeekData nextdata={nextdata} />
    </>
  );
}
