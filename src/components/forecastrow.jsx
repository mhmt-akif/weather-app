import { View, Text, StyleSheet, Image } from "react-native";
export const ForecastRow = ({ item, range, description }) => {

  const barWidth = 83;

  const progressWidth = ((item.temp_max - item.temp_min) / range) * barWidth;
  const weatherImages = {
        "açık": require("../../assets/WeatherCondition/sunny.png"),
        "parçalı bulutlu": require("../../assets/WeatherCondition/cloudy.png"),
        "parçalı az bulutlu": require("../../assets/WeatherCondition/partlycloudy.png"), // API'den gelen bu
        "az bulutlu": require("../../assets/WeatherCondition/cloudy.png"),
        "bulutlu": require("../../assets/WeatherCondition/cloudy.png"),
        "hafif yağmur": require("../../assets/WeatherCondition/rainy.png"),
        "yağmurlu": require("../../assets/WeatherCondition/rainy.png"),
        "kar": require("../../assets/WeatherCondition/snowy.png"),
        "hafif kar": require("../../assets/WeatherCondition/snowy.png"),
        
    }
    const weatherIcon=weatherImages[description]||weatherImages["açık"];

  return (
    <View style={styles.row}>
      <Text style={styles.day}>{item.day}</Text>

      <Image
        style={styles.image}
        source={weatherIcon}      />

      <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
        <Text style={styles.degree}>{item.temp_min}°C</Text>

        <View style={styles.bar}>
          <View style={[styles.progress, { width: progressWidth }]} />
        </View>

        <Text style={styles.degree}>{item.temp_max}°C</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 12,
    paddingHorizontal: 20,
  },
  day: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Poppins",
    width: 74,
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