//Anlık hava durumunu getiren API fonksiyonu
const API_KEY="c146c0cddaf9e15ea212cf85ea580aab";

export const getCurrentlyWeatherAPI=async()=>{
    try{
        const url="https://api.openweathermap.org/data/2.5/weather?q=Istanbul&appid=" + API_KEY + "&units=metric&lang=tr";
        const response = await fetch(url);
        const data=await response.json();

        //istediğimiz verileri döndürüyoruz
        const formattedData={
            temp:data.main.temp,
            description:data.weather[0].description,
            temp_max: data.main.temp_max,
            temp_min: data.main.temp_min,
        }

        return formattedData;
    }catch(err){
        console.log("Hata mesajı!",err);
    }
} 