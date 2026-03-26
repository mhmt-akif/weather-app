import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View,Text,Image, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native';
import { HourlyWeather } from './components/hourlyWeather';
import { WeeklyForecast } from './components/weeklyForecast';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { CurrentWeather } from './components/currentWeather';
import { getCurrentlyWeatherAPI } from './api/getCurrentlyWeatherAPI';
import { getHourlyWeatherAPI } from './api/getHourlyAPI';
import { useEffect, useState } from 'react';
export default function App() {

  const [currentWeather,setCurrentWeather]=useState(null);
  const [hourlyWeather,setHourlyWeather]=useState(null);
  
  //hava durumu bilgisini apiden çeker
  const fetchCurrentWeather=async()=>{
    try{
      const data=await getCurrentlyWeatherAPI();
      setCurrentWeather(data);
    }catch(err){
      console.log("API cekmede bir hata olustu!",err);
    }
  }

  //hava durumunu saatlik hava durumunu apiden çeker
  const fetchHourlyWeather=async()=>{
    try{
      const data=await getHourlyWeatherAPI();
      setHourlyWeather(data);
    }
    catch(err){
      console.log("Saatlik hava durumunu çekmede bir hata oluştu!",err);
    }
    
  }

   //sayfa ilk yenilendiğinde anlık hava durumu çeker
  useEffect(()=>{
    fetchCurrentWeather();
    fetchHourlyWeather();
  },[]);

  //veri yoksa ortada yükleniyor döner
  if(!currentWeather || !hourlyWeather){
    return(
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} color={"blue"} />
      </View>
    )
  }


 


  return (
    
    <LinearGradient
    colors={["#2E335A","#1C1B33"]}
    style={{flex:1}}
    start={{x:0,y:0}}
    end={{x:1,y:1}}
    >
      <View style={{marginBottom:40}}>
    <ScrollView>
    <View style={styles.container}>
    
    <View style={styles.topBar}> {/*TopBar Container */}
      <Feather name="map-pin" size={22} color="white" />
      <Text style={styles.cityName}>İstanbul</Text>
    </View>

    <TouchableOpacity style={{position:"absolute",top:88,right:41}}>
      <View style={{width:33,height:33,backgroundColor:"#48319D",borderRadius:5,justifyContent:"center",alignItems:"center"}}>
        <Ionicons name="settings-outline" size={20} color="white" />
      </View>
   </TouchableOpacity>
   
  {/* Anlık hava durumunu gösteren component */}
   <View style={{marginTop:32,}}>
   <CurrentWeather
    temperature={currentWeather?.temp}
    description={currentWeather?.description}
    max={currentWeather?.temp_max}
    min={currentWeather?.temp_min}
    />
    </View>

    {/* Saatlik hava durumunu gösteren component */}
      <Text style={styles.heading}>Hourly Forecast</Text>
      <View style={{marginTop:30,marginLeft:30,}}>
        
        <FlatList
          data={hourlyWeather.slice(0,9)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item,index)=>index.toString()}
          renderItem={({ item }) => (
            // Her bir kartın arasına boşluk koymak için View ile sardık
            <View style={{ marginRight: 15 }}> 
              <HourlyWeather
                hours={item.time} 
                temperature={item.temp}
                status={item.status}
                description={item.description}

              />
            </View>
          )}
        
        />
        
      </View>
      
      {/*Haftalık Tahmin */}
      <View style={{marginLeft:27,marginTop:32}}>
        <WeeklyForecast/>
      </View>
       
    
   
     
    </View>
     </ScrollView>
     </View>
  </LinearGradient> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar:{
    marginTop:88,
    marginLeft:41,
    flexDirection:"row",
    alignItems:"center",
  },
  cityName:{
    color:"white",
    fontSize:20,
    fontWeight:"500",
    marginLeft:8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading:{
    color:"#9D9EB1",
    fontSize:16,
    fontWeight:"500",
    marginLeft:27,
    marginTop:52,
  }
});