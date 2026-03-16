import { View, Text, StyleSheet, FlatList } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { ForecastRow } from "./forecastrow";

export const WeeklyForecast = () => {

  const forecastData = [
    { id: "1", day: "Today", min: 19, max: 21, progress: 40,status:"Sunny" },
    { id: "2", day: "Mon", min: 18, max: 22, progress: 50,status:"Cloudy" },
    { id: "3", day: "Tue", min: 17, max: 23, progress: 60,status:"Rainy" },
    { id: "4", day: "Wed", min: 20, max: 25, progress: 70,status:"Windy" },
    { id: "5", day: "Thu", min: 21, max: 26, progress: 80,status:"Snowy" },
    { id: "6", day: "Fri", min: 19, max: 24, progress: 60,status:"Partly Cloudy" },
    { id: "7", day: "Sat", min: 18, max: 23, progress: 50,status:"Partly Cloudy" },
    { id: "8", day: "Sun", min: 17, max: 22, progress: 40,status:"Snowy" },
    { id: "9", day: "Mon", min: 16, max: 21, progress: 30,status:"Cloudy" },
    { id: "10", day: "Tue", min: 15, max: 20, progress: 20,status:"Rainy" },
  ];

  const lowestTemp=Math.min(...forecastData.map(item=>item.min));
  const highestTemps=Math.max(...forecastData.map(item=>item.max));
  const range=highestTemps-lowestTemp;
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Feather name="calendar" size={24} color="#9D9EB1" />
        <Text style={styles.header}>10 Day Forecast</Text>
      </View>

      <View style={styles.line}></View>

      <FlatList
        data={forecastData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ForecastRow item={item} range={range} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#2C2A59",
    width: 345,
    borderRadius: 12,
    paddingBottom: 16,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 16,
    marginLeft: 16,
  },
  header: {
    color: "#9D9EB1",
  },
  line: {
    backgroundColor: "#9695AC",
    width: "100%",
    height: 1,
    marginTop: 12,
  },
});