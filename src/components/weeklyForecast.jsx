import { View, Text, StyleSheet, FlatList } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { ForecastRow } from "./forecastrow";
import { getWeeklyWeatherAPI } from "../api/getWeeklyAP";
import { useEffect,useState} from "react";
import { ActivityIndicator } from "react-native";

export const WeeklyForecast = () => {

  const [weeklyData, setWeeklyData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const forecastData = [
  //   { id: "1", day: "Today", min: 19, max: 21, progress: 40,status:"Sunny" },
  //   { id: "2", day: "Mon", min: 18, max: 22, progress: 50,status:"Cloudy" },
  //   { id: "3", day: "Tue", min: 17, max: 23, progress: 60,status:"Rainy" },
  //   { id: "4", day: "Wed", min: 20, max: 25, progress: 70,status:"Windy" },
  //   { id: "5", day: "Thu", min: 21, max: 26, progress: 80,status:"Snowy" },
  // ];

  
  const lowestTemp=Math.min(...weeklyData?.map(item=>item.temp_min));
  const highestTemps=Math.max(...weeklyData?.map(item=>item.temp_max));
  const range=highestTemps-lowestTemp;

  const fetchWeeklyData=async()=>{
    try{
      const data=await getWeeklyWeatherAPI();
      console.log("Haftalık hava durumu verisi:",data[0]);
      setWeeklyData(data);

    }catch(err){
      console.log("Haftalık hava durumunu çekerken bir hata oluştu!",err);
    }
    finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchWeeklyData();
    
  },[]);

  if(loading ||weeklyData.length===0){
    return(
     <View style={[styles.card, { justifyContent: "center", alignItems: "center" }]}>
        <ActivityIndicator size="small" color="#9D9EB1" />
      </View>
    )
  }

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Feather name="calendar" size={24} color="#9D9EB1" />
        <Text style={styles.header}>5 Day Forecast</Text>
      </View>

      <View style={styles.line}></View>

      <FlatList
        data={weeklyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ForecastRow item={item} range={range}description={item.description} />}
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