import { StyleSheet, View } from "react-native"
import { Text,Image } from "react-native";
import { weatherIcons } from "../utils/weatherIcons";
export const HourlyWeather=()=>{
    return(
      
        <View>  {/* container */}
            <View style={styles.hourlyWeatherContainer}> {/* hourly weather container */}
                <Text style={styles.hoursText}>12 AM</Text>
                <View style={{alignItems:"center",justifyContent:"center",marginTop:12}}>
                    <Image style={styles.image} source={weatherIcons.Snowy}/>
                </View>
                <Text style={styles.temperatureText}>19°C</Text>
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