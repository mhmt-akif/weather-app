import { View,Text,Image,StyleSheet } from "react-native"

export const CurrentWeather=({ temperature, description,max,min })=>{
   
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
    const weatherIcon=weatherImages[description]||weatherImages["Sunny"];

   
    return(
        <View style={styles.container}> {/* container */}
            <View style={styles.imageContainer}> {/* Weather Image Container */}
                <Image source={weatherIcon} style={{width:100,height:100}}/>
            </View>
            <View style={styles.degreeContainer}> {/* Degree Container */}
                <Text style={{color:"white",fontSize:64,fontWeight:"500",marginLeft:22}}>{Math.round(temperature)}°</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.maxAndMin}>H:{Math.round(max)}° L:{Math.round(min)}°</Text>
            </View>

        </View>
    )
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    imageContainer:{
        justifyContent:"center",
        alignItems:"center",
    },
    degreeContainer:{
        justifyContent:"center",
        alignItems:"center",
    },
    description:{
        color:"#9D9EB1",
        fonstSize:20,
        fontWeight:"semibold",
    },
    maxAndMin:{
        color:"white",
        fontSize:20,
        fontWeight:"semibold",
    }
})