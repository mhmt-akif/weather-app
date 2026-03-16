import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { HourlyWeather } from './components/hourlyWeather';
import { WeeklyForecast } from './components/weeklyForecast';

export default function App() {
  return (
    <View style={styles.container}>
       <HourlyWeather/>
      <WeeklyForecast />
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});