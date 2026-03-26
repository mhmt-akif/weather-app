import { StyleSheet, View } from "react-native"
import { Text,Image } from "react-native";
import { weatherIcons } from "../utils/weatherIcons";
export const HourlyWeather=({hours,temperature,description})=>{
    
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
   
   
   
    return(
      
        <View>  {/* container */}
            <View style={styles.hourlyWeatherContainer}> {/* hourly weather container */}
                <Text style={styles.hoursText}>{hours}</Text>
                <View style={{alignItems:"center",justifyContent:"center",marginTop:12}}>
                    <Image style={styles.image} source={weatherIcon}/>
                </View>
                <Text style={styles.temperatureText}>{temperature}°C</Text>
            </View>
        </View> 
    )
};
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    hourlyWeatherContainer:{
        backgroundColor:"#262237",
        width:60,
        height:146,
        borderRadius:30,
        alignItems:"center",
        borderColor:"#7976C1",
        borderWidth:1,

    },
    hoursText:{
        color:"white",
        fontSize:15,
        fontWeight:"bold",
        marginTop:16
    },
    image:{
        width:32,
        height:32,
    },
    temperatureText:{
        color:"white",
        fontSize:20,
        fontWeight:"400",
        marginTop:16,
    }
})