const API_KEY="c146c0cddaf9e15ea212cf85ea580aab";

export const getWeeklyWeatherAPI=async()=>{
    try{
        const url=`https://api.openweathermap.org/data/2.5/forecast?lat=41.0082&lon=28.9784&appid=${API_KEY}&units=metric&lang=tr`;
        const response=await fetch(url);
        const data=await response.json();

        const weeklyData=data.list.filter(item=>item.dt_txt.includes("12:00:00")).map(item=>{
            const date=new Date(item.dt*1000);
            const days=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

            return{
                day:days[date.getDay()],
                temp:Math.round(item.main.temp),
                description:item.weather[0].description,
                temp_max:Math.round(item.main.temp_max),
                temp_min:Math.round(item.main.temp_min),

            }
                
            
        });
        return weeklyData;

    }
    catch(err){
        console.log("Haftalık hava durumunu çekerken bir hata oluştu!",err);
    }
}