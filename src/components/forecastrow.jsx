import { View, Text, StyleSheet, Image } from "react-native";
import { weatherIcons } from "../utils/weatherIcons";
export const ForecastRow = ({ item, range }) => {

  const barWidth = 83;
  const status=["Sunny","Cloudy","Rainy","Windy","Snowy","PartlyCloudy"]; 
  const progressWidth = ((item.max - item.min) / range) * barWidth;

  return (
    <View style={styles.row}>
      <Text style={styles.day}>{item.day}</Text>

      <Image
        style={styles.image}
        source={weatherIcons[item.status]||weatherIcons.Sunny}
      />

      <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
        <Text style={styles.degree}>{item.min}°C</Text>

        <View style={styles.bar}>
          <View style={[styles.progress, { width: progressWidth }]} />
        </View>

        <Text style={styles.degree}>{item.max}°C</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 12,
  },
  day: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Poppins",
  },
  image: {
    width: 32,
    height: 32,
  },
  degree: {
    color: "#9D9EB1",
  },
  bar: {
    width: 83,
    height: 6,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
  },
  progress: {
    height: 6,
    backgroundColor: "#48319D",
    borderRadius: 10,
  },
});